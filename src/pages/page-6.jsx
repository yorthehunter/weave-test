import React from 'react';
import Link from 'gatsby-link';
import Separator from '../components/Separator/';

import '../weave/components/separator/index.scss';
import '../weave/components/form/index.scss';

const SixthPage = () => (
  <div>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/page-7">Go to page 7</Link>

    <div className="my--lg" style={{ display: 'flex' }}>
      <p>Hello</p>
      <Separator />
      <p>Hello</p>
      <Separator />
      <p>Hello</p>
    </div>

    <div className="my--lg" style={{ display: 'inline-flex', flexDirection: 'column' }}>
      <p>Hello</p>
      <Separator horizontal />
      <p>Hello</p>
      <Separator horizontal />
      <p>Hello</p>
    </div>

    <div className="weave-form-element">
      <label className="weave-input-label">
        Select
      </label>
      <div className="weave-select_container">
        <select name="select3" className="weave-input-field">
          <optgroup label="First Group">
            <option>Item 1</option>
            <option>Item 2</option>
          </optgroup>
          <optgroup label="Second Group">
            <option>Item 3</option>
            <option>Item 4</option>
          </optgroup>
          <optgroup label="Third Group">
            <option>Item 5</option>
            <option>Item 6</option>
          </optgroup>
        </select>
      </div>
    </div>

    <div className="weave-form-element">
      <label className="weave-input-label">
        Character Count
      </label>
      <input type="text" className="weave-input-field" />
      <p className="weave-helper-text">
        Help text
        <span>
          31/40
        </span>
      </p>
    </div>

    <div className="weave-form-element has-error">
      <label className="weave-input-label">
        This Input has an Error
      </label>
      <input type="text" className="weave-input-field" />
      <p className="weave-helper-text">
        Please enter a value
        <span>
          31/40
        </span>
      </p>
    </div>

    <div className="weave-form-element has-error">
      <label className="weave-input-label">
        This Input has an Error
      </label>
      <textarea className="weave-input-field" />
      <p className="weave-helper-text">
        Please enter a value
        <span>
          31/40
        </span>
      </p>
    </div>

  </div>
);

export default SixthPage;
