import { useRef,useEffect } from 'react'

function App() {
    const inputElement = useRef();

    useEffect(() => {
       const btn =  inputElement.current;
       btn.addEventListener('click', () => {
        btn.style.backgroundColor = 'red';
       })

      }, [])
    

  return (
    <div className="main">
       <input type="text"  />
      <button ref={inputElement} >Focus Input</button>
    </div>
  )
}

export default App
