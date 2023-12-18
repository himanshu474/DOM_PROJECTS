const insert=document.querySelector('#element')

window.addEventListener('keydown',(e)=>{
insert.innerHTML=
`
<div class="color">
<table>
  <tr>
    <th>key</th>
    <th>Keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key ===' '? 'Space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
`
})