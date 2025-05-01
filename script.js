
const dados = {"status": [{"Status": "FINALIZADA", "Ocorrências": 90}, {"Status": "ANDAMENTO", "Ocorrências": 51}, {"Status": "NAN", "Ocorrências": 24}, {"Status": "PENDENTE", "Ocorrências": 17}, {"Status": "EM ANDAMENTO", "Ocorrências": 16}, {"Status": "RESOLVIDA", "Ocorrências": 5}, {"Status": "CONCLUÍDA", "Ocorrências": 4}, {"Status": "FINALIZADA/PENDENTE", "Ocorrências": 2}, {"Status": "FINALIZADO", "Ocorrências": 2}, {"Status": "IDENTIFICADA", "Ocorrências": 1}, {"Status": "REPASSADA", "Ocorrências": 1}, {"Status": "RESOLVENDO", "Ocorrências": 1}], "empresas": [{"Empresa": "ABIGAIL", "Frequência": 9}, {"Empresa": "JONATHAN", "Frequência": 9}, {"Empresa": "OFTALMODONTO", "Frequência": 5}, {"Empresa": "A W VIANA", "Frequência": 5}, {"Empresa": "DANIEL", "Frequência": 5}, {"Empresa": "DAVID", "Frequência": 4}, {"Empresa": "FRED", "Frequência": 4}], "descricoes": [{"Descrição": "SOLICITOU UMA NOTA FISCAL", "Frequência": 10}, {"Descrição": "SOLICITOU NOTA FISCAL", "Frequência": 3}, {"Descrição": "SOLICITOU 3 NOTAS FISCAIS", "Frequência": 2}, {"Descrição": "SOLICITOU DUAS NOTAS FISCAIS", "Frequência": 2}, {"Descrição": "PENDENCIA INSS 2024", "Frequência": 2}]};

// Gráfico Empresas
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
    plugins: { legend: { display: false }},
    scales: {
      x: { ticks: { color: "#fff" }},
      y: { ticks: { color: "#fff" }}
    }
  }
});

// Gráfico Descrições
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
    plugins: { legend: { display: false }},
    scales: {
      x: { ticks: { color: "#fff" }},
      y: { ticks: { color: "#fff" }}
    }
  }
});

// Gráfico Status com interatividade
const chartStatus = new Chart(document.getElementById("graficoStatus"), {
  type: "doughnut",
  data: {
    labels: dados.status.map(e => e.Status),
    datasets: [{
      data: dados.status.map(e => e.Ocorrências),
      backgroundColor: [
        "#007bff", "#28a745", "#ffc107", "#dc3545", "#6f42c1",
        "#00bcd4", "#ff5722", "#8bc34a", "#9c27b0", "#03a9f4"
      ]
    }]
  },
  options: {
    onClick: (evt, item) => {
      if (item.length < 1) return;
      const index = item[0].index;
      const selectedStatus = chartStatus.data.labels[index];
      showStatusDetails(selectedStatus);
    },
    plugins: { legend: { labels: { color: "#fff" }}}
  }
});

// Dados simulados (exemplo)
const ocorrencias = [
  { Empresa: "Empresa A", Descrição: "Solicitou A", Prioridade: "Alta", Status: "FINALIZADA" },
  { Empresa: "Empresa B", Descrição: "Solicitou B", Prioridade: "Média", Status: "EM ANDAMENTO" },
  { Empresa: "Empresa C", Descrição: "Solicitou C", Prioridade: "Baixa", Status: "FINALIZADA" },
  { Empresa: "Empresa D", Descrição: "Solicitou D", Prioridade: "Alta", Status: "ANDAMENTO" },
  { Empresa: "Empresa E", Descrição: "Solicitou E", Prioridade: "Média", Status: "FINALIZADA" }
];

function showStatusDetails(status) {
  const table = document.getElementById("statusTable");
  const tbody = table.querySelector("tbody");
  const title = document.getElementById("statusTitle");
  const wrapper = document.getElementById("statusTableWrapper");

  tbody.innerHTML = "";
  title.textContent = "Ocorrências com status: " + status;
  wrapper.style.display = "block";

  const filtered = ocorrencias.filter(o => o.Status === status);
  if (filtered.length === 0) {
    tbody.innerHTML = "<tr><td colspan='4'>Nenhum dado encontrado para esse status.</td></tr>";
  } else {
    filtered.forEach(o => {
      tbody.innerHTML += `<tr>
        <td>${o.Empresa}</td>
        <td>${o.Descrição}</td>
        <td>${o.Prioridade}</td>
        <td>${o.Status}</td>
      </tr>`;
    });
  }
}
