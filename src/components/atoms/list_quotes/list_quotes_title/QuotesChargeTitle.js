import React, {Component} from 'react';
import '../css/Style.css';

class QuotesChargeTitle extends Component {
    render() {
        return (
            <div className="leg-route">
                <span>
                    <span className="from">
                        <span className="localtion">
                            <span className="port">CNNGB</span>, <span className="city">Ningbo, Zhejiang</span>
                        </span>
                    </span>
                    <span className="sep"> &gt;</span>
                    <span className="to">
                        <span className="localtion">
                            <span className="port">USLGB</span>, <span className="city">Long Beach, CA</span>
                        </span>
                    </span>
                </span>
            </div>
        );
    }
}

export default QuotesChargeTitle;