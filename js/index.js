document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");

  const bosses = {
    godrick: {
      name: "Godrick the Grafted",
      description: "Shardbearer van Stormveil Castle, bekend om zijn gruwelijke grafttechnieken."
    },
    malenia: {
      name: "Malenia blade of Miquella ",
      description: "De Blade of Miquella, een meesterlijke vechter met een dodelijke aanval."
    },
    radahn: {
      name: "Radahn",
      description: "Sterke krijger van Redmane, beroemd om zijn brute kracht en magie."
    },
    morgott: {
      name: "Morgott the omen king",
      description: "King of Leyndell, gehard en sluw met krachtige aanvallen."
    },
    rykard: {
      name: "Rykard lord of Blasphemy ",
      description: "een angstaanjagende vijand met vuurwapens."
    }
  };

  // Attach click events to all boss buttons
  Object.keys(bosses).forEach(id => {
    const btn = document.querySelector(`.btn.${id}`);
    btn.addEventListener("click", () => {
      modal.innerHTML = `
        <h2>${bosses[id].name}</h2>
        <p>${bosses[id].description}</p>
      `;
      modal.classList.add("show");
    });
  });

  // Click modal to close
  modal.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  // Drag-to-pan functionality
  const mapWrapper = document.querySelector(".map-wrapper");
  let isDown = false;
  let startX, startY, scrollLeft, scrollTop;

  mapWrapper.addEventListener("mousedown", (e) => {
    isDown = true;
    mapWrapper.classList.add("active");
    startX = e.pageX - mapWrapper.offsetLeft;
    startY = e.pageY - mapWrapper.offsetTop;
    scrollLeft = mapWrapper.scrollLeft;
    scrollTop = mapWrapper.scrollTop;
    mapWrapper.style.cursor = "grabbing";
  });

  mapWrapper.addEventListener("mouseleave", () => {
    isDown = false;
    mapWrapper.style.cursor = "grab";
  });

  mapWrapper.addEventListener("mouseup", () => {
    isDown = false;
    mapWrapper.style.cursor = "grab";
  });

  mapWrapper.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - mapWrapper.offsetLeft;
    const y = e.pageY - mapWrapper.offsetTop;
    const walkX = x - startX;
    const walkY = y - startY;
    mapWrapper.scrollLeft = scrollLeft - walkX;
    mapWrapper.scrollTop = scrollTop - walkY;
  });
});
