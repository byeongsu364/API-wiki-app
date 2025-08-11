import './App.css'
import { useState, useRef, useEffect } from 'react'
import { searchWikiTitles } from './api/wiki'

function App() {

  const [q, setQ] = useState('')
  const [items, serItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  console.log(q)
  return (
    <div className='app'>
      <h1>위키백과 검색</h1>
      <div className="error">에러코드</div>
      <div className="search">
        <input ref={inputRef} value={q} onChange={(e) => setQ(e.target.value)} type="text" placeholder='검색어를 입력하세요(예 : 서울, 한글, 리액트' />
        <button>검색</button>
      </div>
      <ul className='list'>
        <li>
          <div>
            <strong>제목</strong>
            <p>설명</p>
            <a href="#">위키에서 보기</a>
          </div>
        </li>
        <li>
          <div>
            <strong>제목</strong>
            <p>설명</p>
            <a href="#">위키에서 보기</a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default App