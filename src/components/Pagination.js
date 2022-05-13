import React, {useState, useEffect} from 'react'

const Pagination = ({totalPages, paginate}) => {

    const [pageNo, setPageNo] = useState(1)

    useEffect(() => {
        paginate(pageNo);
    }, [pageNo])

  return (
    <nav>
        <ul style={btnStyle}>
            <li style={listStyle}>
                <button onClick={() => setPageNo(pageNo - 1)} href='!#' disabled={pageNo <= 1}>
                    Previous
                </button>
            </li>
            <li style={listStyle}>
                <button onClick={() => setPageNo(pageNo + 1)} href='!#' disabled={pageNo >= totalPages}>
                    Next
                </button>
            </li>
        </ul>
    </nav>
  )
}


const btnStyle = {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'center',
    alignItems: 'center',
}

const listStyle= {
    padding: 10,
}

export default Pagination