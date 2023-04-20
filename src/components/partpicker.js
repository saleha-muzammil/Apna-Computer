import React from 'react';

function partpicker()
{
    return (
        <div>
            <div>
                <h1> Choose your parts</h1>
                <div>
                    <table class="parttable">
                    <thead>
                        <tr>
                        <th class="th__component">Component</th>
                        <th class="th__selection" colspan="2">Selection</th>
                        <th></th>
                        <th class="th__base">Base</th>
                        <th class="th__promo">Promo</th>
                        <th class="th__shipping">Shipping</th>
                        <th class="th__tax ">Tax</th>
                        <th class="th__settings"></th>
                        <th class="th__price">Price</th>
                        <th class="th__where">Where</th>
                        <th class="th__buy"></th>
                        <th class="th__remove"></th>
                        </tr>
                    </thead>

                    <tbody>
<tr class="tr__product">
<td class="td__component">
<a href="/products/cpu/">
CPU
</a>
</td>
<td class="td__placement--empty"></td>
<td class="td__addComponent" colspan="11">
<a href="/products/cpu/" class="button  button--icon button--small">
Choose A CPU
</a>
</td>
</tr>

<tr class="tr__product">
<td class="td__component">
<a href="/products/cpu-cooler/">
CPU Cooler
</a>
</td>
<td class="td__placement--empty"></td>
<td class="td__addComponent" colspan="11">
<a href="/products/cpu-cooler/" class="button  button--icon button--small">
Choose A CPU Cooler
</a>
</td>
</tr>
<tr class="tr__product">
<td class="td__component">
<a href="/products/motherboard/">
Motherboard
</a>
</td>
<td class="td__placement--empty"></td>
<td class="td__addComponent" colspan="11">
<a href="/products/motherboard/" class="button  button--icon button--small">
Choose A Motherboard
</a>
</td>
</tr>
<tr class="tr__product">
<td class="td__component">
<a href="/products/memory/">
Memory
</a>
</td>
<td class="td__placement--empty"></td>
<td class="td__addComponent" colspan="11">
<a href="/products/memory/" class="button  button--icon button--small">
Choose Memory
</a>
</td>
</tr>
<tr class="tr__product">
<td class="td__component">
 <a href="/products/internal-hard-drive/">
Storage
</a>
</td>
<td class="td__placement--empty"></td>
<td class="td__addComponent" colspan="11">
<a href="/products/internal-hard-drive/" class="button  button--icon button--small">
Choose Storage
</a>
</td>
</tr>
<tr class="tr__product">
<td class="td__component">
<a href="/products/video-card/">
Video Card
</a>
</td>
<td class="td__placement--empty"></td>
<td class="td__addComponent" colspan="11">
<a href="/products/video-card/" class="button  button--icon button--small">
Choose A Video Card
</a>
</td>
</tr>
<tr class="tr__product">
<td class="td__component">
<a href="/products/case/">
Case
</a>
</td>
<td class="td__placement--empty"></td>
<td class="td__addComponent" colspan="11">
<a href="/products/case/" class="button  button--icon button--small">
Choose A Case
</a>
</td>
</tr>
<tr class="tr__product">
<td class="td__component">
<a href="/products/power-supply/">
Power Supply
</a>
</td>
<td class="td__placement--empty"></td>
<td class="td__addComponent" colspan="11">
<a href="/products/power-supply/" class="button  button--icon button--small">
Choose A Power Supply
</a>
</td>
</tr>
<tr class="tr__product">
<td class="td__component">
<a href="/products/os/">
Operating System
</a>
</td>
<td class="td__placement--empty"></td>
<td class="td__addComponent" colspan="11">
<a href="/products/os/" class="button  button--icon button--small">
Choose An Operating System
</a>
</td>
</tr>
<tr class="tr__product">
<td class="td__component">
<a href="/products/monitor/">
Monitor
</a>
</td>
<td class="td__placement--empty"></td>
<td class="td__addComponent" colspan="11">
<a href="/products/monitor/" class="button  button--icon button--small">
Choose A Monitor
</a>
</td>
</tr>
<tr class="">
<td class="td__component">
<p>Expansion Cards / Networking</p>
</td>
<td class="td__placement--empty"></td>
<td class="td__addComponent" colspan="11">
<a href="/products/sound-card/">Sound Cards</a>,
<a href="/products/wired-network-card/">Wired Network Adapters</a>,
<a href="/products/wireless-network-card/">Wireless Network Adapters</a>
 </td>
</tr>
<tr class="">
<td class="td__component">
<p>Peripherals</p>
</td>
<td class="td__placement--empty"></td>
<td class="td__addComponent" colspan="11">
<a href="/products/headphones/">Headphones</a>,
<a href="/products/keyboard/">Keyboards</a>,
<a href="/products/mouse/">Mice</a>,
<a href="/products/speakers/">Speakers</a>,
<a href="/products/webcam/">Webcams</a>
</td>
</tr>
<tr class="tr__product--last">
<td class="td__component">
<p>Accessories / Other</p>
</td>
<td class="td__placement--empty"></td>
<td class="td__addComponent" colspan="11">
<a href="/products/case-accessory/">Case Accessories</a>,
<a href="/products/case-fan/">Case Fans</a>,
<a href="/products/fan-controller/">Fan Controllers</a>,
<a href="/products/thermal-paste/">Thermal Compound</a>,
<a href="/products/external-hard-drive/">External Storage</a>,
<a href="/products/optical-drive/">Optical Drives</a>,
<a href="/products/ups/">UPS Systems</a>
</td>
</tr>
</tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default partpicker ; 