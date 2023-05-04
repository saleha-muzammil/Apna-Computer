import React, {useState, useEffect} from 'react';
import './partpicker.css';
import { useLocation, Link } from 'react-router-dom';


function Partpicker()
{
  const [prodName, setProdName] = useState('');
  const [prodPrice, setProdPrice] = useState('');
    const location = useLocation();
    let CPUimage=''
    let CPUbase= ''
    let CPUPrice= ''
    let CPUWhere= ''
    const product = 
      [
        {
      imageURL: 'https://example.com/cpu.png',
      base: 'Intel',
      price: 300,
      where: 'Amazon',
      pname: 'Intel Core i9-9900K',
      siteURL: 'https://example.com/cpu',
      cores: 8,
      tpd: 95,
      coreclock: 3.6,
      graphic: 'Intel UHD Graphics 630',
      }, 
      {
        imageURL: 'https://example.com/cpu.png',
      base: 'Intel',
      price: 500,
      where: 'Amazon',
      pname: 'Intel Core i9-10000K',
      siteURL: 'https://example.com/cpu',
      cores: 8,
      tpd: 95,
      coreclock: 3.6,
      graphic: 'Intel UHD Graphics 630', 
      }
    ]
    if (location.state) {
        const data = location.state;
        CPUimage=data.url;
        CPUbase = data.base;
        CPUPrice = data.price;
        CPUWhere = data.where;
    }
    const sendCpuData = () => {
      localStorage.clear();
      localStorage.setItem('cpu', JSON.stringify(product));
      window.location.href = '/testrender';
    };

    useEffect(() => {
      console.log(localStorage.getItem('selectedCpu'));
      const productFromStorage = JSON.parse(localStorage.getItem('selectedCpu'));
      setProdName(productFromStorage.pname);
      setProdPrice(productFromStorage.price);
    }, [])

    return (   
        <div>
            <div>
                <h1> Choose your parts</h1>
                <div>
                    <table class="parttable">
                    <thead>
                        <tr>
                        <th class="h_component">Component</th>
                        <th class="h_selection" colspan="2">Selection</th>
                        <th class="h_base">Base</th>
                        <th class="h_price">Price</th>
                        <th class="h_where">Where</th>
                        <th class="h_buy"></th>
                        <th class="h_remove"></th>
                        </tr>
                    </thead>

                    <tbody>
                    <tr className="t_product">
                <td className="d_component">
                <Link ><a href="/products/cpu/">CPU</a></Link>
                </td>
                <td class="componentimage">{CPUimage}</td>
                <td>{prodName}</td>
                <td>{}</td>
                <td>{prodPrice}</td>
                <td>{CPUWhere}</td>
                <Link onClick={sendCpuData}><a href="/testrender" className="smallbutton button--icon button--small">
                    Choose A CPU...
                  </a></Link>
              </tr>
              <tr className="t_product">
                <td className="d_component">
                  <a href="/products/cpu-cooler/">CPU Cooler</a>
                </td>
                <td className="d_placement--empty"></td>
                <td className="d_addComponent" colSpan="10">
                  <a href="/products/cpu-cooler/" className="smallbutton  button--icon button--small">
                    Choose A CPU Cooler
                  </a>
                </td>
              </tr>
              <tr className="t_product">
                <td className="d_component">
                  <a href="/products/motherboard/">Motherboard</a>
                </td>
                <td className="d_placement--empty"></td>
                <td className="d_addComponent" colSpan="10">
                  <a href="/products/motherboard/" className="smallbutton  button--icon button--small">
                    Choose A Motherboard
                  </a>
                </td>
              </tr>
<tr class="t_product">
<td class="d_component">
<a href="/products/memory/">
Memory
</a>
</td>
<td class="d_placement--empty"></td>
<td class="d_addComponent" colspan="10">
<a href="/products/memory/" class="smallbutton  button--icon button--small">
Choose Memory
</a>
</td>
</tr>
<tr class="t_product">
<td class="d_component">
 <a href="/products/internal-hard-drive/">
Storage
</a>
</td>
<td class="d_placement--empty"></td>
<td class="d_addComponent" colspan="10">
<a href="/products/internal-hard-drive/" class="smallbutton  button--icon button--small">
Choose Storage
</a>
</td>
</tr>
<tr class="t_product">
<td class="d_component">
<a href="/products/video-card/">
Video Card
</a>
</td>
<td class="d_placement--empty"></td>
<td class="d_addComponent" colspan="10">
<a href="/products/video-card/" class="smallbutton  button--icon button--small">
Choose A Video Card
</a>
</td>
</tr>
<tr class="t_product">
<td class="d_component">
<a href="/products/case/">
Case
</a>
</td>
<td class="d_placement--empty"></td>
<td class="d_addComponent" colspan="10">
<a href="/products/case/" class="smallbutton  button--icon button--small">
Choose A Case
</a>
</td>
</tr>
<tr class="t_product">
<td class="d_component">
<a href="/products/power-supply/">
Power Supply
</a>
</td>
<td class="d_placement--empty"></td>
<td class="d_addComponent" colspan="10">
<a href="/products/power-supply/" class="smallbutton  button--icon button--small">
Choose A Power Supply
</a>
</td>
</tr>
<tr class="t_product">
<td class="d_component">
<a href="/products/os/">
Operating System
</a>
</td>
<td class="d_placement--empty"></td>
<td class="d_addComponent" colspan="10">
<a href="/products/os/" class="smallbutton  button--icon button--small">
Choose An Operating System
</a>
</td>
</tr>
<tr class="t_product">
<td class="d_component">
<a href="/products/monitor/">
Monitor
</a>
</td>
<td class="d_placement--empty"></td>
<td class="d_addComponent" colspan="10">
<a href="/products/monitor/" class="smallbutton  button--icon button--small">
Choose A Monitor
</a>
</td>
</tr>
</tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Partpicker;