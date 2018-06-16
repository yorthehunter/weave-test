import React from 'react';
import Link from 'gatsby-link';
import Table from '../components/Table/';

import '../weave/components/table/index.scss';

const FourthPage = () => (
  <div>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/page-6/">Go to page 6</Link>

    <Table
      className="full-width"
      type={['striped', 'hoverable']}
      headings={['1H', '2H', '3H']}
      data={
        [
          ['1', '2', '3'],
          ['1', '2', '3'],
        ]
      }
    />

    <table className="weave-table weave-table--condensed weave-table--striped weave-table--hoverable weave-table--bordered">
      <thead>
        <tr>
          <th>h1</th>
          <th>h2</th>
          <th>h3</th>
          <th>h4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>
            <table className="weave-table weave-table--hoverable">
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>


  </div>
);

export default FourthPage;
