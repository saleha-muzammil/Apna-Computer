import React from 'react';
import Navbar from './Navbar';
import './partpicker.css'
import {Link} from 'react-router-dom';


function Partpicker()
{
const [cpuName, setCpuName] = React.useState('');
const [cpuPrice, setCpuPrice] = React.useState('');
const [cpuWhere, setCpuWhere] = React.useState('');
const [cpuURL, setCpuURL] = React.useState('');

const [coolerName, setCoolerName] = React.useState('');
const [coolerPrice, setCoolerPrice] = React.useState('');
const [coolerWhere, setCoolerWhere] = React.useState('');
const [coolerURL, setCoolerURL] = React.useState('');

const [moboName, setMoboName] = React.useState('');
const [moboPrice, setMoboPrice] = React.useState('');
const [moboWhere, setMoboWhere] = React.useState('');
const [moboURL, setMoboURL] = React.useState('');

const [memoryName, setMemoryName] = React.useState('');
const [memoryPrice, setMemoryPrice] = React.useState('');
const [memoryWhere, setMemoryWhere] = React.useState('');
const [memoryURL, setMemoryURL] = React.useState('');

const [storageName, setStorageName] = React.useState('');
const [storagePrice, setStoragePrice] = React.useState('');
const [storageWhere, setStorageWhere] = React.useState('');
const [storageURL, setStorageURL] = React.useState('');

const [videocardName, setGpuName] = React.useState('');
const [videocardPrice, setGpuPrice] = React.useState('');
const [videocardWhere, setGpuWhere] = React.useState('');
const [videocardURL, setGpuURL] = React.useState('');

const [caseName, setCaseName] = React.useState('');
const [casePrice, setCasePrice] = React.useState('');
const [caseWhere, setCaseWhere] = React.useState('');
const [caseURL, setCaseURL] = React.useState('');

const [psuName, setPsuName] = React.useState('');
const [psuPrice, setPsuPrice] = React.useState('');
const [psuWhere, setPsuWhere] = React.useState('');
const [psuURL, setPsuURL] = React.useState('');

const [product, setProducts]= React.useState('');

    const sendCpuData = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch('http://localhost:4000/api/auth/cpuget', {
          method: "GET", 
          mode: "cors", 
          cache: "no-cache", 
          credentials: "same-origin", 
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow", 
          referrerPolicy: "no-referrer", 
        });
  
        const data = await response.json();
        setProducts(data);
  
        if (response.status=== 200)
        {
          localStorage.setItem('cpu', JSON.stringify(data));
          window.location.href = '/CPUSelector';
        }
        else 
        {
         console.log(response) 
        }
      } catch (error) {
        console.log(error);
      }
    };    
    const sendCoolerData = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch('http://localhost:4000/api/auth/cpucoolerget', {
          method: "GET", 
          mode: "cors", 
          cache: "no-cache", 
          credentials: "same-origin", 
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow", 
          referrerPolicy: "no-referrer", 
        });
  
        const data = await response.json();
        setProducts(data);
  
        if (response.status=== 200)
        {
          localStorage.setItem('cooler', JSON.stringify(data));
          window.location.href = '/CoolerSelector';
        }
        else 
        {
         console.log(response) 
        }
      } catch (error) {
        console.log(error);
      }
    };    
    const sendMoboData = async (event) => {
      try {
      const response = await fetch('http://localhost:4000/api/auth/motherboardget', {
          method: "GET", 
          mode: "cors", 
          cache: "no-cache", 
          credentials: "same-origin", 
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow", 
          referrerPolicy: "no-referrer", 
        });
  
        const data = await response.json();
        setProducts(data);
  
        if (response.status=== 200)
        {
          localStorage.setItem('mobo', JSON.stringify(data));
          window.location.href = '/MotherboardSelector';
        }
        else 
        {
         console.log(response) 
        }
      } catch (error) {
        console.log(error);
      }
    };
    const sendMemoryData = async (event) => {
      try {
      const response = await fetch('http://localhost:4000/api/auth/memoryget', {
          method: "GET", 
          mode: "cors", 
          cache: "no-cache", 
          credentials: "same-origin", 
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow", 
          referrerPolicy: "no-referrer", 
        });
  
        const data = await response.json();
        setProducts(data);
  
        if (response.status=== 200)
        {
          localStorage.setItem('memory', JSON.stringify(data));
          window.location.href = '/MemorySelector';
        }
        else 
        {
         console.log(response) 
        }
      } catch (error) {
        console.log(error);
      }
    };
    const sendStorageData = async (event) => {
      try {
      const response = await fetch('http://localhost:4000/api/auth/storageget', {
          method: "GET", 
          mode: "cors", 
          cache: "no-cache", 
          credentials: "same-origin", 
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow", 
          referrerPolicy: "no-referrer", 
        });
  
        const data = await response.json();
        setProducts(data);
  
        if (response.status=== 200)
        {
          localStorage.setItem('storage', JSON.stringify(data));
          window.location.href = '/StorageSelector';
        }
        else 
        {
         console.log(response) 
        }
      } catch (error) {
        console.log(error);
      }
    };
    const sendVideocardData = async (event) => {
      try {
      const response = await fetch('http://localhost:4000/api/auth/videocardget', {
          method: "GET", 
          mode: "cors", 
          cache: "no-cache", 
          credentials: "same-origin", 
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow", 
          referrerPolicy: "no-referrer", 
        });
  
        const data = await response.json();
        setProducts(data);
  
        if (response.status=== 200)
        {
          localStorage.setItem('videocard', JSON.stringify(data));
          window.location.href = '/VideocardSelector';
        }
        else 
        {
         console.log(response) 
        }
      } catch (error) {
        console.log(error);
      }
    };
    const sendCaseData = async (event) => {
      try {
      const response = await fetch('http://localhost:4000/api/auth/caseget', {
          method: "GET", 
          mode: "cors", 
          cache: "no-cache", 
          credentials: "same-origin", 
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow", 
          referrerPolicy: "no-referrer", 
        });
  
        const data = await response.json();
        setProducts(data);
  
        if (response.status=== 200)
        {
          localStorage.setItem('case', JSON.stringify(data));
          window.location.href = '/CaseSelector';
        }
        else 
        {
         console.log(response) 
        }
      } catch (error) {
        console.log(error);
      }
    };
    const sendPSUData = async (event) => {
      try {
        const response = await fetch('http://localhost:4000/api/auth/powersupplyget', {
          method: "GET", 
          mode: "cors", 
          cache: "no-cache", 
          credentials: "same-origin", 
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow", 
          referrerPolicy: "no-referrer", 
        });
  
        const data = await response.json();
        setProducts(data);
  
        if (response.status=== 200)
        {
          localStorage.setItem('psu', JSON.stringify(data));
          window.location.href = '/PSUSelector';
        }
        else 
        {
         console.log(response) 
        }
      } catch (error) {
        console.log(error);
      }
    };
 

React.useEffect(() => {
  console.log(localStorage.getItem('selectedCpu'));
  const cpuFromStorage = JSON.parse(localStorage.getItem('selectedCpu'));
  console.log(cpuFromStorage)
 
  setCpuName(cpuFromStorage?.pname);
  setCpuPrice(cpuFromStorage?.price);
  setCpuWhere(cpuFromStorage?.where);
  setCpuURL(cpuFromStorage?.url);
  console.log(cpuName)
}, [cpuName,cpuPrice,cpuURL,cpuWhere])


   React.useEffect(() => {
      console.log(localStorage.getItem('selectedcooler'));
      const coolerFromStorage = JSON.parse(localStorage.getItem('selectedcooler'));
      setCoolerName(coolerFromStorage?.pname);
      setCoolerPrice(coolerFromStorage?.price);
      setCoolerWhere(coolerFromStorage?.where);
      setCoolerURL(coolerFromStorage?.url);
      console.log(coolerPrice)
    }, [coolerName,coolerPrice,coolerURL,coolerWhere])
    
React.useEffect(() => {
  console.log(localStorage.getItem('selectedmobo'));
  const moboFromStorage = JSON.parse(localStorage.getItem('selectedmobo'));
  setMoboName(moboFromStorage?.pname);
  setMoboPrice(moboFromStorage?.price);
  setMoboWhere(moboFromStorage?.where);
  setMoboURL(moboFromStorage?.url);
  }, [])
  
  React.useEffect(() => {
  console.log(localStorage.getItem('selectedmemory'));
  const memoryFromStorage = JSON.parse(localStorage.getItem('selectedmemory'));
  setMemoryName(memoryFromStorage?.pname);
  setMemoryPrice(memoryFromStorage?.price);
  setMemoryWhere(memoryFromStorage?.where);
  setMemoryURL(memoryFromStorage?.url);
  }, [])
  
  React.useEffect(() => {
  console.log(localStorage.getItem('selectedstorage'));
  const storageFromStorage = JSON.parse(localStorage.getItem('selectedstorage'));
  setStorageName(storageFromStorage?.pname);
  setStoragePrice(storageFromStorage?.price);
  setStorageWhere(storageFromStorage?.where);
  setStorageURL(storageFromStorage?.url);
  }, [])
  
  React.useEffect(() => {
  console.log(localStorage.getItem('selectedVideocard'));
  const gpuFromStorage = JSON.parse(localStorage.getItem('selectedVideocard'));
  setGpuName(gpuFromStorage?.pname);
  setGpuPrice(gpuFromStorage?.price);
  setGpuWhere(gpuFromStorage?.where);
  setGpuURL(gpuFromStorage?.url);
  }, [])
  
  React.useEffect(() => {
  console.log(localStorage.getItem('selectedCase'));
  const caseFromStorage = JSON.parse(localStorage.getItem('selectedCase'));
  setCaseName(caseFromStorage?.pname);
  setCasePrice(caseFromStorage?.price);
  setCaseWhere(caseFromStorage?.where);
  setCaseURL(caseFromStorage?.url);
  }, [])
  
  React.useEffect(() => {
  console.log(localStorage.getItem('selectedpsu'));
  const powerSupplyFromStorage = JSON.parse(localStorage.getItem('selectedpsu'));
  setPsuName(powerSupplyFromStorage?.pname);
  setPsuPrice(powerSupplyFromStorage?.price);
  setPsuWhere(powerSupplyFromStorage?.where);
  setPsuURL(powerSupplyFromStorage?.url);
  }, [])

    return (
      
        <div>
          <Navbar/>
            <div>
                <h3 className= "partsheader"> Choose your parts</h3>
                <div>
                    <table class="parttable">
                    <thead>
                        <tr>
                        <th class="th__component">Component</th>
                        <th class="th__selection">Selection</th>
                        <th class="th__base">Price</th>
                        <th class="th__price">Where</th>
                        <th class="th__where">Add</th>
                        </tr>
                    </thead>

                    <tbody>
                    <tr className="tr__product">
                <td className="td__component">
                <Link ><a href="CPUSelector">CPU</a></Link>
                </td>
                <td>{cpuName}</td>
                <td>{cpuPrice}</td>
                <td>{cpuWhere}</td>
                <Link onClick={sendCpuData}><a href="/CPUSelector" className="button button--icon button--small">
                    Choose A CPU
                  </a></Link>
              </tr>
              <tr className="tr__product">
                <td className="td__component">
                  <a href="/CoolerSelector">CPU Cooler</a>
                </td>
                <td>{coolerName}</td>
                <td>{coolerPrice}</td>
                <td>{coolerWhere}</td>
                <Link onClick={sendCoolerData}><a href="/CoolerSelector" className="button button--icon button--small">
                    Choose A Cooler
                  </a></Link>

              </tr>
              <tr className="tr__product">
                <td className="td__component">
                  <a href="/products/motherboard/">Motherboard</a>
                </td>
                <td>{moboName}</td>
                <td>{moboPrice}</td>
                <td>{moboWhere}</td>
                <Link onClick={sendMoboData}>
  <a href="/MotherboardSelector" className="button button--icon button--small">
    Choose A Motherboard
  </a>
</Link>
              </tr>
<tr class="tr__product">
<td class="td__component">
<a href="/products/memory/">Memory</a></td>

                <td>{memoryName}</td>
                <td>{memoryPrice}</td>
                <td>{memoryWhere}</td>
<Link onClick={sendMemoryData}>
  <a href="/MemorySelector" className="button button--icon button--small">
    Choose Memory
  </a>
</Link>

</tr>
<tr class="tr__product">
<td class="td__component">
 <a href="/products/internal-hard-drive/">
Storage
</a>
</td>
<td>{storageName}</td>
                <td>{storagePrice}</td>
                <td>{storageWhere}</td>
<Link onClick={sendStorageData}>
  <a href="/StorageSelector" className="button button--icon button--small">
    Choose Storage
  </a>
</Link>
</tr>
<tr class="tr__product">
<td class="td__component">
<a href="/products/video-card/">
Video Card
</a>
</td>
<td>{videocardName}</td>
                <td>{videocardPrice}</td>
                <td>{videocardWhere}</td>
<Link onClick={sendVideocardData}>
  <a href="/VideocardSelector" className="button button--icon button--small">
    Choose GPU
  </a>
</Link>
</tr>
<tr class="tr__product">
<td class="td__component">
<a href="/products/case/">
Case
</a>
</td>
<td>{caseName}</td>
                <td>{casePrice}</td>
                <td>{caseWhere}</td>
<Link onClick={sendCaseData}>
  <a href="/CaseSelector" className="button button--icon button--small">
    Choose A Case
  </a>
</Link>
</tr>
<tr class="tr__product">
<td class="td__component">
<a href="/products/power-supply/">
Power Supply
</a>
</td>
<td>{psuName}</td>
                <td>{psuPrice}</td>
                <td>{psuWhere}</td>
<Link onClick={sendPSUData}>
  <a href="/PowerSupplySelector" className="button button--icon button--small">
    Choose A Power Supply
  </a>
</Link>
</tr>
</tbody>
                    </table>
                    <h1 className= "costheader">Total Cost: {
  (parseInt(cpuPrice) || 0) +
  (parseInt(coolerPrice) || 0) +
  (parseInt(moboPrice) || 0) +
  (parseInt(storagePrice) || 0) +
  (parseInt(memoryPrice) || 0) +
  (parseInt(casePrice) || 0) +
  (parseInt(psuPrice) || 0) +
  (parseInt(videocardPrice) || 0)
}</h1>
                </div>
            </div>
        </div>
    )
}

export default Partpicker;