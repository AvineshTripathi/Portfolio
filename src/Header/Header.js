import './Header.css';
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
            <svg width="1000">
                <path id="lineAB" d="M 225 300 L 225 100" stroke="red"
                    stroke-width="3" fill="none" />
            </svg>

        </div>
    );
}

export default Header