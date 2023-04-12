import React, { useEffect, useState, useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from 'react-bootstrap';
import apiCalls from 'src/api/apiCalls';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Transactions = () => {
  const [usersDetails, setUsersDetails] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);
  const [serachValue, setSearchValue] = useState();
  const [inputError, setInputError] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [loader, setLoader] = useState(false);
  const [pageNo, setPageNo] = useState(0);
  const [totalCardData, setTotalCardData] = useState([]);
  const [search, setSearch] = useState(null);
  const [loadeMessage, setLoaderMessage] = useState('');
  const pageSize = 10;
  const shouldLog = useRef(true);

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      stakingTransactions(1, 10, null);
    }
  }, []);//eslint-disable-line react-hooks/exhaustive-deps

  const stakingTransactions = async (pageNo, pageSize, search) => {
    const skip = pageNo * pageSize - pageSize;
    const take = pageSize;
    setLoader(true);
    let response = await apiCalls.getStakingTransactions(take, skip, search)
    if (response.ok) {
      let _pageNo = pageNo + 1;
      setPageNo(_pageNo);
      setSearch(search);
      setLoader(false);
      let MergeGridData = pageNo === 1 ? [...response.data] : [...usersDetails, ...response.data];
      setUsersDetails(MergeGridData);
      if (MergeGridData.length > 0) {
        setLoaderMessage(' ');
      } else if (MergeGridData.length === 0) {
        setLoaderMessage('No Data Found');
      }
      if (search == null) {
        setTotalCardData(MergeGridData);
      }
    }
    else {
      setErrorMessage(apiCalls.isErrorDispaly(response));
      setLoader(false);
    }
  }

  const fetchMoreData = () => {
    if (usersDetails.length < 500) {
      setTimeout(() => {
        stakingTransactions(pageNo, pageSize, search);
      }, 500);
    }
    else {
      setHasMore(false)
    }
  };

  const handleSearch = ({ currentTarget: { value } }) => {
    setInputError(false)
    if (value) {
      setSearchValue(value)
    }
    else {
      setUsersDetails(totalCardData);
    }
  };

  function handleSearchIcon() {
    if (serachValue === undefined) {
      stakingTransactions(1, 10, null);
      setInputError(true);
    }
    else if (serachValue.length > 2) {
      stakingTransactions(1, 10, serachValue)
    }
    else if (serachValue.length >= 1 || serachValue.length > 2) {
      setInputError(true);
    }
  };

  return (
    <>
      <h3 className='page-title mb-4'>User Transactions</h3>
      {errorMessage && (
        <Alert variant="danger">
          <p style={{ color: 'red', margin: 10 }}>{errorMessage}</p>
        </Alert>
      )}
      <div className='custom-flex pb-4 pt-2'>
        <Form className="d-flex grid-search">
          <Form.Control
            type="search"
            placeholder="Search"
            className="search-style"
            aria-label="Search"
            onKeyUp={(e) => handleSearch(e)}

          />
          <i className="icon search-icon" onClick={handleSearchIcon}></i>
        </Form>
        <div className='d-flex align-items-center'><div className='d-flex align-items-center filter-style c-pointer ms-3'><span className='icon grid-filter'></span><p className='ms-2 mb-0 project-text text-purple'>Filter</p></div></div>
      </div>
      <div>
        <span className="text-danger">{inputError && <p>Enter atlest 3 leater</p>}</span>
      </div>
      <div className='user-content'>
        <InfiniteScroll
          dataLength={usersDetails?.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4 className="text-center">{loader && <Spinner animation='border' />}</h4>}
          scrollThreshold="0.8"
        >
          {usersDetails?.map((items, index) => (
            <Row className='badge-style' key={index}>
              <Col style={{ width: 200 }}><label className='project-text text-lightpurpl'>Transactions Type</label><div className='d-flex align-items-center'><span className={items.type === "Stake" ? 'icon receive' : items.type === "Unstake" ? 'icon send' : items.type === "Withdraw" ? 'icon send' : ""}></span><p className='mb-0 about-label text-overflow text-secondary ms-1'>{items.type}</p></div></Col>
              <Col style={{ width: 150 }}><label className='project-text text-lightpurpl'>Date</label><p className='mb-0 about-label text-overflow text-secondary'>{items.transactionDate}</p></Col>
              <Col style={{ width: 150 }}><label className='project-text text-lightpurpl'>Coin</label><div className='d-flex align-items-center'><span className='icon btc'></span><p className='mb-0 about-label text-overflow text-secondary ms-1'>{items.token}</p></div></Col>
              <Col style={{ width: 150 }}><label className='project-text text-lightpurpl'>Amount</label><p className='mb-0 about-label text-overflow text-rejected'>{items.amount}</p></Col>
            </Row>
          ))}
          {loadeMessage && <>
            {usersDetails.length === 0 && <h4 className=" text-danger text-center">No Data Found</h4>}
          </>}
        </InfiniteScroll>
      </div>
    </>
  )
}
export default Transactions;