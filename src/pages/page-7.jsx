import React from 'react';
import Link from 'gatsby-link';

import '../weave/core/index.scss';

const fontSizes = ['f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'];

const SeventhPage = () => (
  <div>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/page-8">Go to page 8</Link>

    <style dangerouslySetInnerHTML={{__html: `
        .test-div:nth-child(even) {
          background-color: rgba(0,0,0,0.075);
        }
        
        .test-div {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;  overflow: hidden;
        }
      }
    `}} />

    {
      fontSizes.map((size) => (
        <div key={size} className={`test-div weave-type-${size} weave-line-component-${size}`}>
          Component type size {size}
        </div>
      ))
    }
    <hr />
    {
      fontSizes.map((size) => (
        <div key={size} className={`test-div weave-type-${size} weave-line-body-${size}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      ))
    }

  </div>
);

export default SeventhPage;
