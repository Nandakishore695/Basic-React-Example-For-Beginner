import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';
import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { post } from 'utils/api';
import { get } from 'utils/apiGet';
import apiUploadPost from 'utils/apiUploadPost';
import { useAccount } from 'wagmi';
import profileImg from '../../assets/images/profile.png';
import { Spinner } from 'react-bootstrap';
import { store } from 'store';
import { selectedCollection } from 'reducer/rootReducer';
import { selectedImage } from 'reducer/rootReducer';
import { connect } from 'react-redux';

function ProfilePage(props: any) {
  const { address } = useAccount();
  const [loader, setLoader] = useState(false);
  const [scuess, setSucess] = useState(false);
  const [validated, setValidated] = useState(false);
  const [imageValidtion, setImageValidation] = useState('');

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phoneNo: '',
    aboutUs: '',
    profilePicUrl: '',
    imageUrl: '',
    WalletAddress: null,
    id: null,
  });
  const [errorMsg, setErrorMsg] = useState(false);

  const handleChange = (e: any, key: any) => {
    if (key === 'phoneNo') {
      if (!e.target.value || e.target.value?.match(/^\d{1,}(\.\d{0,4})?$/)) {
        setProfile({ ...profile, phoneNo: e.target.value });
      }
    }
    else {
      const value = e.target.value;
      let _obj: any = { ...profile };
      _obj[key] = value;
      setProfile(_obj);
    }
  };

  useEffect(() => {
    getCustomerDetail();
  }, []);

  const getCustomerDetail = async () => {
    setLoader(true);
    let response = await get(`User/CustomerDetails/${address}`);
    if (response) {
      setProfile(response.data);
      setProfile({ ...response.data, profilePicUrl: props.auth.selectedCollection })
      setLoader(false);
    } else {
      setErrorMsg(isErrorDispaly(response));
      setLoader(false);
    }
  };

  const saveDetails = async (event: any) => {
    event.preventDefault();
    setLoader(true);
    const form = event.currentTarget;
    let obj = {
      id: profile.id,
      name: profile.name,
      email: profile.email,
      phoneNo: profile.phoneNo,
      profilePicUrl: profile.profilePicUrl,
      walletAddress: address,
      aboutUs: profile.aboutUs,
    };
    store.dispatch(selectedImage(obj.profilePicUrl));
    if (form.checkValidity() === true) {
      let res = await post(`User/SaveUser`, obj)
        .then((res) => {
          if (res) {
            setSucess(true);
            setLoader(false);
            getCustomerDetail();
            setTimeout(function () {
              setSucess(false);
            }, 2000);
          }
        })
        .catch((error) => {
          setErrorMsg(isErrorDispaly(error));
          setLoader(false);
        });
    } else {
      setLoader(false);
    }
    setValidated(true);
  };

  const uploadToClient = (event: any) => {
    setImageValidation('');
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (!file.name.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
        setImageValidation('It is not permitted to upload a file. Only jpg,jpeg,png,gif,webp files can be uploaded.');
      } else {
        uploadToServer(file);
      }
    }
  };
  const uploadToServer = async (file: any) => {
    const body: any = new FormData();
    body.append('file', file);
    apiUploadPost(`/Upload/UploadFileNew`, body)
      .then((res) => res)
      .then((data) => {
        let _obj = { ...profile };
        _obj.profilePicUrl = data[0];
        store.dispatch(selectedCollection(data[0]));
        setProfile(_obj);
      })
      .catch((error) => {
        setErrorMsg(isErrorDispaly(error));
      });
  };
  const isErrorDispaly = (objValue: any) => {
    if (objValue.data && typeof objValue.data === 'string') {
      return objValue.data;
    } else if (objValue.originalError && typeof objValue.originalError.message === 'string') {
      return objValue.originalError.message;
    } else {
      return 'Something went wrong please try again!';
    }
  };


  return (
    <>
      <Form noValidate validated={validated} onSubmit={(e) => saveDetails(e)}>
        <div className=" profile-detailsview">
          <div className="text-end c-pointer">
          </div>
          <div className="row">
            <div className="col-12 profile-details">
              <Form.Group className="avthar-image">
                <Image
                  src={profile?.profilePicUrl || profile?.imageUrl || profileImg}
                  width="100"
                  height="100"
                  alt=""
                />
                <input type="file" name="myImage" className="icon md cam" onChange={uploadToClient} />
                {/* <button><span className="icon md cam" /></button> */}
              </Form.Group>
              <h2 className="person-name">My Profile</h2>
            </div>
          </div>
          <div className="container" id="profile">
            {errorMsg && (
              <Alert variant="danger">
                <p style={{ color: 'red', margin: 10 }}>{errorMsg}</p>
              </Alert>
            )}
            {imageValidtion && (
              <Alert variant="danger">
                <p style={{ color: 'red', margin: 10 }}>{imageValidtion}</p>
              </Alert>
            )}
            {scuess && (
              <Alert role="alert">
                <span>{scuess && 'profile save successfully'}</span>
              </Alert>
            )}
            <div className="row mt-5">
              <div className="col-md-4 col-12 mobile-space-xs">
                <Form.Group>
                  <div className="d-flex justify-content-between">
                    <Form.Label className="mb-0">Name</Form.Label>
                  </div>
                  <Form.Control
                    type="text"
                    value={profile?.name}
                    onChange={(e) => handleChange(e, 'name')}
                    placeholder="Name"
                  />
                </Form.Group>
              </div>
              <div className="col-md-4 col-12 mobile-space-xs">
                <Form.Group>
                  <div className="d-flex justify-content-between">
                    <Form.Label className="mb-0">Phone No</Form.Label>
                  </div>
                  <Form.Control
                    type="text"
                    onChange={(e) => handleChange(e, 'phoneNo')}
                    placeholder="Phone"
                    value={profile?.phoneNo}
                    maxLength={13}
                    className="profile-input input-style"
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please provide a valid phoneno.</Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="col-md-4 col-12 mobile-space-xs">
                <Form.Group>
                  <div className="d-flex justify-content-between">
                    <Form.Label className="mb-0">Email</Form.Label>
                  </div>

                  <Form.Control
                    type="email"
                    onChange={(e) => handleChange(e, 'email')}
                    placeholder="Email"
                    value={profile.email}
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please provide a valid Email.</Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="col-12 mt-3">
                <Form.Group>
                  <div className="d-flex justify-content-between">
                    <Form.Label className="mb-0">Bio</Form.Label>
                  </div>
                  <Form.Control
                    as="textarea"
                    onChange={(e) => handleChange(e, 'aboutUs')}
                    placeholder="Bio"
                    value={profile.aboutUs}
                  />
                </Form.Group>
              </div>
              <div className="mt-5 text-end">
                <Button type="submit" className="custom-btn active c-pointer" disabled={loader}>
                  <span>{loader && <Spinner size="sm" />} </span> Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
}
const connectStateToProps = ({ auth }) => {
  return { auth: auth };
};
export default connect(connectStateToProps, (dispatch) => {
  return { dispatch };
})(ProfilePage);
