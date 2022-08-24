let statusCandidato = "aprovada";

switch (statusCandidato) {
    case "aprovada":
        console.log("Parabéns!");
        break;

    case "lista":
        console.log("Sob análise");
        break;

    case "reprovada":
        console.log("Nota insuficiente");
        break;

    default:
        console.log("não atendeu as expectativas, tente outra vez");
}