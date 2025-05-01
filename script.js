
fetch('dados.json')
  .then(res => res.json())
  .then(data => {
    new Chart(document.getElementById("graficoStatus"), {
      type: "doughnut",
      data: {
        labels: data.status.map(s => s.Status),
        datasets: [{
          data: data.status.map(s => s.Ocorrências),
          backgroundColor: ["#29B6F6", "#FFA726", "#66BB6A", "#EF5350", "#AB47BC"],
          borderWidth: 2
        }]
      },
      options: {
        plugins: { legend: { labels: { color: "#fff" } } }
      }
    });

    new Chart(document.getElementById("graficoEmpresas"), {
      type: "line",
      data: {
        labels: data.empresas.map(e => e.Empresa),
        datasets: [{
          label: "Ocorrências",
          data: data.empresas.map(e => e.Frequência),
          borderColor: "#FFA726",
          backgroundColor: "rgba(255,167,38,0.2)",
          fill: true,
          tension: 0.4,
          pointBackgroundColor: "#FFA726",
          pointBorderColor: "#fff",
          pointHoverRadius: 6,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          x: { ticks: { color: "#fff" }, grid: { color: "#444" }},
          y: { ticks: { color: "#fff" }, grid: { color: "#444" }}
        },
        plugins: { legend: { labels: { color: "#fff" } } }
      }
    });

    new Chart(document.getElementById("graficoDescricoes"), {
      type: "bar",
      data: {
        labels: data.descricoes.map(d => d.Descrição),
        datasets: [{
          label: "Frequência",
          data: data.descricoes.map(d => d.Frequência),
          backgroundColor: "rgba(102,187,106,0.6)",
          borderColor: "#66BB6A",
          borderWidth: 1,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: "#fff" }, grid: { color: "#333" }},
          y: { ticks: { color: "#fff" }, grid: { color: "#333" }}
        }
      }
    });

    const tbody = document.querySelector("#tabelaRelatorio tbody");
    data.relatorio.forEach(item => {
      tbody.innerHTML += `<tr>
        <td>${item["Data Formatada"] || ""}</td>
        <td>${item["Empresa"] || ""}</td>
        <td>${item["Descrição"] || ""}</td>
        <td>${item["Status"] || ""}</td>
        <td>${item["Prioridade"] || ""}</td>
      </tr>`;
    });
    $('#tabelaRelatorio').DataTable({ responsive: true });
  });
