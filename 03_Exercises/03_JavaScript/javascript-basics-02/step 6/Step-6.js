document.querySelectorAll('img').forEach((img,i)=>{
    img.addEventListener('mouseover', ()=>{
      img.src = `images/image${i + 1}_2.jpg`;})
  });
  document.querySelectorAll('img').forEach((img,i)=>{
    img.addEventListener('mouseout', ()=>{
      img.src = `images/image${i+1}.jpg`;})
  });
    