import '../style/Section.scss';


export default function Section(){


  return (
    <section id="viewBox">
      <div className="container">
      <div className="slide_btn">
    <button type="button" className="next">다음내용</button>
    <button type="button" className="prev">이전내용</button>
  </div>

  <div className="view_content">
    <ul className="view_wrap">
      <li><button type="button">광고 1</button></li>
      <li><button type="button">광고 2</button></li>
      <li><button type="button">광고 3</button></li>
      <li><button type="button">광고 4</button></li>
      <li><button type="button">광고 5</button></li>
    </ul>
  </div>

      </div> 
  </section>
  
  )
}