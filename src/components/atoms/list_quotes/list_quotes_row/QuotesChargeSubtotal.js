import React, {Component} from 'react';
import '../css/Style.css';

class QuotesChargeSubtotal extends Component {
    render() {
        return (
            <div className="subtotal-row">
                        <span className="subtotal">
                            <span className="subtotal-label"> Subtotal </span>
                            <span className="subtotal-amount">
                                <span className="formatted-price">
                                    <span className="symbol">USD</span>
                                    <span className="value">2,590.00</span>
                                </span>
                            </span>
                        </span>
            </div>
        );
    }
}

export default QuotesChargeSubtotal;