import './Header.css';
import $ from 'jquery';
function Header() {
    return (
        <div className="header">
            <div className="name">
                Avinesh Tripathi
                <div>world on war distancee</div>
            </div>
            <div className="scroll_down">
                scroll down
            </div>
            <div className="svgg">
                <svg height="900" width="1000" >
                    <path className="path" d="M 500 100 L 500 400 C 500 800 100 700 50 900" stroke="white"
                        stroke-width="2" fill="none" />
                </svg>
                <div className="about">
                    <div className="about_div">
                        <div className="about_div_1">
                            About
                        </div>
                        <div className="about_div_2">
                            sfsdcc fsefsd fsjij djsgo ppps fijis efdhjh diicnm dfsdiji 
                            idfiajija fiahsincan sdjshcnjia shiaisjjd aiijisjn 
                        </div>
                    </div>
                </div>
                <svg height="900" width="1000">
                    <path className="path2" d="M 50 30 C 50 30 40 500 700 300" stroke="white" stroke-width="2" fill="none" />
                </svg>
            </div>
        </div>
    );
}

$(document).ready(function() {
    //variable for the 'stroke-dashoffset' unit
    var $dashOffset = $(".path").css("stroke-dashoffset");
    //on a scroll event - execute function
    $(window).scroll(function() {
      //calculate how far down the page the user is 
      var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 210);
      //convert dashoffset pixel value to interger
      var $newUnit = parseInt($dashOffset, 10);
      //get the value to be subtracted from the 'stroke-dashoffset'
      var $offsetUnit = $percentageComplete * ($newUnit / 100);
      //set the new value of the dashoffset to create the drawing effect
      $(".path").css("stroke-dashoffset", $newUnit - $offsetUnit);
      
  });
  });
/*
  $(document).ready(function() {
    //variable for the 'stroke-dashoffset' unit
    var $dash_Offset = $(".path2").css("stroke-dashoffset");
    //on a scroll event - execute function
    $(window).scroll(function() {
      //calculate how far down the page the user is 
      var $percentage_Complete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 210);
      //convert dashoffset pixel value to interger
      var $new_Unit = parseInt($dash_Offset, 10);
      //get the value to be subtracted from the 'stroke-dashoffset'
      var $offset_Unit = $percentage_Complete * ($new_Unit / 100);
      //set the new value of the dashoffset to create the drawing effect
      $(".path2").css("stroke-dashoffset", $new_Unit - $offset_Unit);
      
  });
  });
  */

export default Header