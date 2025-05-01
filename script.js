
const dados = {"status": [{"Status": "FINALIZADA", "Ocorrências": 90}, {"Status": "ANDAMENTO", "Ocorrências": 51}, {"Status": "NAN", "Ocorrências": 24}, {"Status": "PENDENTE", "Ocorrências": 17}, {"Status": "EM ANDAMENTO", "Ocorrências": 16}, {"Status": "RESOLVIDA", "Ocorrências": 5}, {"Status": "CONCLUÍDA", "Ocorrências": 4}, {"Status": "FINALIZADA/PENDENTE", "Ocorrências": 2}, {"Status": "FINALIZADO", "Ocorrências": 2}, {"Status": "IDENTIFICADA", "Ocorrências": 1}, {"Status": "REPASSADA", "Ocorrências": 1}, {"Status": "RESOLVENDO", "Ocorrências": 1}], "empresas": [{"Empresa": "ABIGAIL", "Frequência": 9}, {"Empresa": "JONATHAN", "Frequência": 9}, {"Empresa": "OFTALMODONTO", "Frequência": 5}, {"Empresa": "A W VIANA", "Frequência": 5}, {"Empresa": "DANIEL", "Frequência": 5}, {"Empresa": "DAVID", "Frequência": 4}, {"Empresa": "FRED", "Frequência": 4}], "descricoes": [{"Descrição": "SOLICITOU UMA NOTA FISCAL", "Frequência": 10}, {"Descrição": "SOLICITOU NOTA FISCAL", "Frequência": 3}, {"Descrição": "SOLICITOU 3 NOTAS FISCAIS", "Frequência": 2}, {"Descrição": "SOLICITOU DUAS NOTAS FISCAIS", "Frequência": 2}, {"Descrição": "PENDENCIA INSS 2024", "Frequência": 2}]};

// Gráfico de Pizza - Status
new Chart(document.getElementById("graficoStatus"), {
  type: "doughnut",
  data: {
    labels: dados.status.map(e => e.Status),
    datasets: [{
      data: dados.status.map(e => e.Ocorrências),
      backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545", "#6f42c1", "#00bcd4", "#ff5722", "#8bc34a", "#9c27b0", "#03a9f4"]
    }]
  },
  options: {
    plugins: {
      legend: { labels: { color: "#fff" } }
    }
  }
});

// Gráfico de Linha - Empresas
new Chart(document.getElementById("graficoEmpresas"), {
  type: "line",
  data: {
    labels: dados.empresas.map(e => e.Empresa),
    datasets: [{
      label: "Ocorrências",
      data: dados.empresas.map(e => e.Frequência),
      borderColor: "#00bfff",
      backgroundColor: "rgba(0,191,255,0.2)",
      fill: true,
      tension: 0.3,
      pointBackgroundColor: "#00bfff"
    }]
  },
  options: {
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { ticks: { color: "#fff" } },
      y: { ticks: { color: "#fff" } }
    }
  }
});

// Gráfico de Barras Horizontais - Descrições
new Chart(document.getElementById("graficoDescricoes"), {
  type: "bar",
  data: {
    labels: dados.descricoes.map(e => e.Descrição),
    datasets: [{
      data: dados.descricoes.map(e => e.Frequência),
      backgroundColor: "#3399ff",
      borderRadius: 12
    }]
  },
  options: {
    indexAxis: 'y',
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { ticks: { color: "#fff" } },
      y: { ticks: { color: "#fff" } }
    }
  }
});
