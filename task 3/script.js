function checkAnswers() {
  const q1 = document.querySelector('input[name="q1"]:checked').value
  const q2 = document.querySelector('input[name="q2"]:checked').value
  const q3 = document.querySelector('input[name="q3"]:checked').value

  let score = 0

  if (q1 === "paris") {
    score++
  }

  if (q2 === "jupiter") {
    score++
  }

  if (q3 === "alexander graham bell") {
    score++
  }

  const result = document.createElement("p")
  result.classList.add("result")
  result.textContent = `You scored ${score} out of 3.`
  document.body.appendChild(result)

  setTimeout(() => {
    result.remove()
  }, 100000) // remove after 1min

  const submitBtn = document.querySelector("#submit")
  submitBtn.disabled = true
}
