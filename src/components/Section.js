import '../style/Section.scss';
import { Link } from 'react-router-dom';

export default function Section(){

  return (
  <section id="viewBox">
     <h2 className="blind">광고영역</h2>
    <div className="container">
        <div class="indi_container">
          <ul class="indicator blind_wrap" >
            <li className="action"><Link to="/"><span>1</span></Link></li>
            <li><Link to="/"><span>2</span></Link></li>
            <li><Link to="/"><span>3</span></Link></li>
            <li><Link to="/"><span>4</span></Link></li>
            <li><Link to="/"><span>5</span></Link></li> 
          </ul>
        </div>
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