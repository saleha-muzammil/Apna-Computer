import React from "react";
import "./Navbar.css";
import { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'


function Navbar() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }
    return (

      
      <nav className="nav">
        <section class="nav_top">
        <h3 className="logoheader">  اپنا کمپیوٹر </h3>

<div classname="countrylist">
  <ul>
<li>  <a href="/">Join Now</a> </li>
            <li>
              <a href="/productform">Admin View</a>
            </li>
            <Select options={options} value={value} onChange={changeHandler} /></ul>
            </div>
</section>

<section class="nav_bottom">
<ul class="nav__categories list-unstyled" role="presentation">
<li><a href="/partpicker">Builder</a></li>
<li> <a href="/buildguide">Build Guides</a> </li>
<li> <a href="/prebuild">Completed Builds</a> </li>
<li> <a href="/">Browse Products</a> </li>
</ul>
</section>

      </nav>
    );
  }

  export default Navbar;