const btns = document.querySelectorAll(".qa");

btns.forEach((btn) => {
  btn.onclick = (e) => {
    var qaElement = e.target.closest(".qa");

    // Close all other answers
    document.querySelectorAll(".qa").forEach((otherQA) => {
      if (otherQA !== qaElement) {
        otherQA.classList.remove("active");
        const otherAnswer = otherQA.querySelector(".answer");
        otherAnswer.style.height = "0";
        otherAnswer.classList.remove("show");
        otherQA.querySelector(".fa-solid").classList.remove("rotate");
      }
    });

    // Open/close the clicked answer
    qaElement.classList.toggle("active");
    const answer = qaElement.querySelector(".answer");
    answer.style.height = answer.classList.contains("show")
      ? "0"
      : answer.scrollHeight + "px";
    answer.classList.toggle("show");
    qaElement.querySelector(".fa-solid").classList.toggle("rotate");
  };
});
