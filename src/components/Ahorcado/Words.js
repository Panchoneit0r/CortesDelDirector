var programming_languages = [
	"python",
	"javascript",
	"chicken",
	"json",
	"java",
	"html",
	"css",
    "c",
	"csharp",
	"for",
	"while",
	"php",
	"sql",
    "if",
    "else"
]

function randomWord() {
  return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}

export { randomWord }