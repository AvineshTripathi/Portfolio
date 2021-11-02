import './SecondPart.css';
import $ from 'jquery';
import Bounce  from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

function SecondPart() {
    return (
            <div className="second_main">
                <div className="animation">
                    <svg height="400" width="1000">
                        <path className="path3" d="M 500 -20 L 500 800" stroke-width="2" stroke="white" fill="none" />
                    </svg>
                </div>
                <div className="main">
                    <div class="part_title">
                        <div class="part_title_left">
                            <Bounce left delay={800}> 
                                Contributions
                            </Bounce>
                        </div>
                        <div class="part_title_right">
                            <Bounce right delay={200}>
                                Education
                            </Bounce>
                        </div>
                    </div>
                    <div class="part_mainbox">
                        <div class="part_flexbox1">
                            <div class="k8">
                                <Zoom bottom cascade>
                                    KUBERNETES
                                </Zoom>
                            </div>
                            <div class="k8_details">
                                <Zoom bottom delay={400}>
                                <br></br>
                                Joined the community from August 2021, Learning about kubernetes, exploring the community, contributing to K/website and other projects, part of APAC MoC Blog Series Team
                                </Zoom>                       
                            </div> 
                            
                        </div>
                        <div class="part_flexbox2">
                            hmmm
                        </div>
                    </div>

                </div>
            </div>
    );
}

$(document).ready(function() {
    //variable for the 'stroke-dashoffset' unit
    var $dash_Offset = $(".path3").css("stroke-dashoffset");
    //on a scroll event - execute function
    $(window).scroll(function() {
      //calculate how far down the page the user is 
      var $percentage_Complete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 1300);
      //convert dashoffset pixel value to interger
      var $new_Unit = parseInt($dash_Offset, 10);
      //get the value to be subtracted from the 'stroke-dashoffset'
      var $offset_Unit = $percentage_Complete * ($new_Unit / 100);
      //set the new value of the dashoffset to create the drawing effect
      $(".path3").css("stroke-dashoffset", $new_Unit - $offset_Unit);
      
  });
  });


  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 2200) {
        $(".main").addClass("main_animation");
    } else {
        $(".main").removeClass("main_animation");
    }
});

export default SecondPart