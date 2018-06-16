import React from 'react';
import Link from 'gatsby-link';
import Table from '../components/Table/';
import Spinner from '../components/Spinner/';
import Dropdown from '../components/Dropdown/';
import DropdownActivator from '../components/Dropdown/DropdownActivator';
import DropdownMenu from '../components/Dropdown/DropdownMenu';

import '../weave/components/table/index.scss';
import '../weave/components/spinner/index.scss';
import '../weave/components/dropdown/index.scss';

const FourthPage = () => (
  <div>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/page-6/">Go to page 6</Link>

    <Dropdown tag="div">
      <DropdownActivator>This activates a dropdown below</DropdownActivator>
      <DropdownMenu menuItems>
        <a href="#">Yo</a>
        <a href="#">Yo</a>
      </DropdownMenu>
    </Dropdown>

    <Spinner size="xs" />
    <Spinner />
    <Spinner size="md" />
    <Spinner size="lg" />
    <Spinner size="xl" />

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
