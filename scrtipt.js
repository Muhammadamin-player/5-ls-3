let random = prompt('soningizni kiriting')

  // 1. 
  console.log("Random son chiqarildi:", random);

  // 2. 
  let kopaytma = random * 2;
  console.log("Random son 2 ga ko'paytirildi:" + kopaytma);

  // 3. 
  let bolinma = random / 2;
  let qoldiq = random % 2;

  if (qoldiq == 0) {
    console.log("Son 2 ga bolindi Natijada:" + bolinma + "-Qoldiq yo'q.");
  } else {
    console.log("Son 2 ga bo'linmadi. Natijada:" + "Qoldiq:" + qoldiq);
  }











