function displayServices() {
    const serviceList = document.getElementById("serviceList");

    console.log("serviceList");

    services.forEach((service, index) => {
        const serviceCard = document.createElement("div");

        serviceCard.classList.add("col-md-4", "mb-4");

        serviceCard.innerHTML = `
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">${service.name}</h5>
          <p>${service.breifDescription}</p>
            <div class="d-flex justify-content-center">
              <!-- Details Button -->
              <button class="btn btn-service detailsAndCloseBtn me-2" data-bs-toggle="modal" data-bs-target="#serviceModal" onclick="openModal(${index})">Details</button>
        `;
        serviceList.appendChild(serviceCard);
    });
}

displayServices();


function openModal(index) {
    const service = services[index];
  
    document.getElementById("modalDescription").textContent = service.description;
    document.getElementById("serviceModalLabel").textContent = service.name;
}