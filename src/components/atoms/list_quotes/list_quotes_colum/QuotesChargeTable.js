import React, {Component} from 'react';
import '../css/Style.css';
class QuotesChargeTable extends Component {
    render() {
        return (
            <table className="leg-fees-table">
                <tbody>
                <tr>
                    <th className="fee-code">Fee code</th>
                    <th className="fee-name">Fee name</th>
                    <th className="comment">Comment</th>
                    <th className="units">Units</th>
                    <th className="unit-price">Unit price</th>
                    <th className="amount">Amount</th>
                    <th className="final-amount">Final Amount</th>
                </tr>

                <tr className="fee-row">
                    <td className="fee-code">OCEAN 40'</td>
                    <td className="fee-name">Inland Freight and Services at Origin	</td>
                    <td className="comment">Per Container</td>
                    <td className="units">1</td>
                    <td className="unit-price"><span className="formatted-price in-table"><span className="symbol">USD</span><span className="value"> CNY1,600.00 </span></span>
                    </td>
                    <td className="amount"><span className="formatted-price in-table"><span className="symbol">USD</span><span className="value">CNY1,600.00</span></span>
                    </td>
                    <td className="final-amount"><span className="formatted-price in-table"><span className="symbol">USD</span><span className="value">USD230.24</span></span>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default QuotesChargeTable;