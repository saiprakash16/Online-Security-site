// =====================
// Navigation logic
// =====================
function showSection(id) {
  const sections = document.querySelectorAll(".page-section");
  sections.forEach((sec) => {
    sec.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Show home & render quizzes on load
document.addEventListener("DOMContentLoaded", () => {
  showSection("home");
  renderAllQuizzes();
});

// =====================
// Quiz data
// =====================

const quizzes = {
  1: {
    title: "Lesson 1 Quiz – Strong Passwords",
    questions: [
      {
        text: "Which of the following is the strongest password?",
        options: [
          "rohan123",
          "Password1",
          "R0h@n!2025#SHOP",
          "12345678"
        ],
        correctIndex: 2
      },
      {
        text: "What is the safest way to store many complex passwords?",
        options: [
          "Write them in a notebook",
          "Use the same password everywhere so it’s easy",
          "Store them in a password manager",
          "Ask a friend to remember them"
        ],
        correctIndex: 2
      }
    ]
  },

  2: {
    title: "Lesson 2 Quiz – Two-Factor Authentication",
    questions: [
      {
        text: "What does 2FA add to your login process?",
        options: [
          "A longer username",
          "Extra advertisements",
          "A second factor like OTP or app code",
          "Automatic password changes"
        ],
        correctIndex: 2
      },
      {
        text: "Who should you share your OTP with?",
        options: [
          "Bank staff who call you",
          "Customer support on WhatsApp",
          "Friends and family",
          "No one"
        ],
        correctIndex: 3
      }
    ]
  },

  3: {
    title: "Lesson 3 Quiz – Fake Shopping Websites",
    questions: [
      {
        text: "Which URL looks the most suspicious?",
        options: [
          "https://www.amazon.com",
          "https://applestore-discount.net",
          "https://www.bankofamerica.com",
          "https://www.flipkart.com"
        ],
        correctIndex: 1
      },
      {
        text: "Which is a warning sign of a fake website?",
        options: [
          "Too-good-to-be-true discounts everywhere",
          "Clear return policy and contact info",
          "Normal prices similar to other sites",
          "Secure payment methods available"
        ],
        correctIndex: 0
      }
    ]
  },

  4: {
    title: "Lesson 4 Quiz – HTTPS & Secure Connections",
    questions: [
      {
        text: "Before entering card details, what should you check in the browser?",
        options: [
          "The background color",
          "The number of ads",
          "HTTPS and lock icon",
          "The font style"
        ],
        correctIndex: 2
      },
      {
        text: "What does HTTPS mainly provide?",
        options: [
          "Faster internet speed",
          "Encrypted communication",
          "Free antivirus",
          "Better graphics"
        ],
        correctIndex: 1
      }
    ]
  },

  5: {
    title: "Lesson 5 Quiz – Phishing Emails & SMS",
    questions: [
      {
        text: "A phishing email often:",
        options: [
          "Has perfect spelling and grammar",
          "Uses urgent language and strange links",
          "Comes only from friends",
          "Contains only images"
        ],
        correctIndex: 1
      },
      {
        text: "What should you do if you are unsure about an email from your bank?",
        options: [
          "Click the link to check",
          "Reply with your account details",
          "Delete your bank account",
          "Type the bank URL manually in the browser"
        ],
        correctIndex: 3
      }
    ]
  },

  6: {
    title: "Lesson 6 Quiz – OTP & PIN Safety",
    questions: [
      {
        text: "When is it okay to share your OTP?",
        options: [
          "When the caller says they are from the bank",
          "When a support agent asks for it",
          "Never",
          "When a friend needs help"
        ],
        correctIndex: 2
      },
      {
        text: "How should you enter your PIN at an ATM?",
        options: [
          "Say it out loud",
          "Type it quickly without looking",
          "Cover the keypad with your hand",
          "Write it on the ATM"
        ],
        correctIndex: 2
      }
    ]
  },

  7: {
    title: "Lesson 7 Quiz – Mobile Banking Safety",
    questions: [
      {
        text: "Where should you download your bank’s mobile app from?",
        options: [
          "Random links from SMS",
          "Third-party websites",
          "Official app stores (e.g., Play Store, App Store)",
          "From a friend’s USB drive"
        ],
        correctIndex: 2
      },
      {
        text: "Which of these is a good practice?",
        options: [
          "Disabling phone lock",
          "Sharing your phone unlock code",
          "Keeping OS and apps updated",
          "Using public phones for banking"
        ],
        correctIndex: 2
      }
    ]
  },

  8: {
    title: "Lesson 8 Quiz – Public Wi-Fi Risks",
    questions: [
      {
        text: "Which activity is riskiest on public Wi-Fi?",
        options: [
          "Streaming music",
          "Checking public news websites",
          "Online banking",
          "Watching YouTube"
        ],
        correctIndex: 2
      },
      {
        text: "What is a safer option for banking on the go?",
        options: [
          "Free airport Wi-Fi",
          "Unknown café Wi-Fi",
          "Unsecured hotspot",
          "Your mobile data (4G/5G)"
        ],
        correctIndex: 3
      }
    ]
  },

  9: {
    title: "Lesson 9 Quiz – Refund & Support Scams",
    questions: [
      {
        text: "A fake support agent might ask you to:",
        options: [
          "Install remote access apps",
          "Fill a feedback form on the official app",
          "Check your email",
          "Visit the official website"
        ],
        correctIndex: 0
      },
      {
        text: "What is the safest way to contact customer support?",
        options: [
          "Numbers from random Google search results",
          "Links received on WhatsApp",
          "Official website or in-app support section",
          "Phone numbers from social media comments"
        ],
        correctIndex: 2
      }
    ]
  },

  10: {
    title: "Lesson 10 Quiz – Best Practices Checklist",
    questions: [
      {
        text: "Which combination shows good online security behavior?",
        options: [
          "Same password everywhere + no 2FA",
          "Strong unique passwords + 2FA + checking URLs",
          "Public Wi-Fi for banking + sharing OTP",
          "Installing apps from unknown stores"
        ],
        correctIndex: 1
      },
      {
        text: "Which statement is true?",
        options: [
          "Security is only the bank’s responsibility.",
          "Users also play a key role in staying secure.",
          "If a site has a logo, it is always safe.",
          "Scams only target older people."
        ],
        correctIndex: 1
      }
    ]
  }
};

// =====================
// Render all quizzes
// =====================

function renderAllQuizzes() {
  const containers = document.querySelectorAll(".quiz-container");
  containers.forEach((container) => {
    const lessonId = container.getAttribute("data-lesson");
    const quizData = quizzes[lessonId];
    if (!quizData) return;

    const quizDiv = document.createElement("div");
    quizDiv.classList.add("quiz");

    const titleEl = document.createElement("h3");
    titleEl.textContent = quizData.title;
    quizDiv.appendChild(titleEl);

    quizData.questions.forEach((q, qIndex) => {
      const qDiv = document.createElement("div");
      qDiv.classList.add("quiz-question");

      const qTitle = document.createElement("h4");
      qTitle.textContent = `Q${qIndex + 1}. ${q.text}`;
      qDiv.appendChild(qTitle);

      const optionsDiv = document.createElement("div");
      optionsDiv.classList.add("quiz-options");

      q.options.forEach((opt, optIndex) => {
        const label = document.createElement("label");

        const input = document.createElement("input");
        input.type = "radio";
        input.name = `lesson${lessonId}-q${qIndex}`;
        input.value = optIndex;

        label.appendChild(input);
        label.appendChild(document.createTextNode(" " + opt));
        optionsDiv.appendChild(label);
      });

      qDiv.appendChild(optionsDiv);
      quizDiv.appendChild(qDiv);
    });

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit Quiz";
    submitBtn.classList.add("quiz-submit");
    submitBtn.addEventListener("click", () => gradeQuiz(lessonId, container));
    quizDiv.appendChild(submitBtn);

    const resultDiv = document.createElement("div");
    resultDiv.classList.add("quiz-result");
    quizDiv.appendChild(resultDiv);

    container.appendChild(quizDiv);
  });
}

// =====================
// Badge overlay helper
// =====================

function showBadge(message, level) {
  const overlay = document.getElementById("badge-overlay");
  const textEl = document.getElementById("badge-text");
  if (!overlay || !textEl) return;

  textEl.textContent = message;

  // Reset level classes
  overlay.classList.remove("good", "great", "perfect", "oops");

  // Apply the level (controls color)
  if (level) {
    overlay.classList.add(level);
  }

  // Trigger show
  overlay.classList.add("show");

  // Hide after a short time
  setTimeout(() => {
    overlay.classList.remove("show");
  }, 1300);
}

// Random pick helper
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// =====================
// Grade quiz
// =====================

function gradeQuiz(lessonId, container) {
  const quizData = quizzes[lessonId];
  if (!quizData) return;

  let score = 0;
  const total = quizData.questions.length;

  quizData.questions.forEach((q, qIndex) => {
    const selected = document.querySelector(
      `input[name="lesson${lessonId}-q${qIndex}"]:checked`
    );
    if (selected && parseInt(selected.value, 10) === q.correctIndex) {
      score++;
    }
  });

  const resultDiv = container.querySelector(".quiz-result");
  let message = `You scored ${score} out of ${total}. `;
  let badgeText = "";
  let level = "good";

  const ratio = score / total;

  if (score === 0) {
    badgeText = "Try Again!";
    level = "oops";
    message += "Don't worry, review the lesson and give it another shot.";
  } else if (ratio < 0.5) {
    badgeText = pickRandom(["Good Start!", "Keep Going!", "You Got This!"]);
    level = "good";
    message += "Nice attempt. Review the key points and try again.";
  } else if (ratio < 1) {
    badgeText = pickRandom(["Great!", "Awesome!", "Brilliant!", "Sweet!"]);
    level = "great";
    message += "Well done! A little more review can make it perfect.";
  } else {
    badgeText = pickRandom(["Excellent!", "Fantastic!", "Crushing It!", "Perfect!"]);
    level = "perfect";
    message += "Perfect score! You mastered this lesson.";
  }

  resultDiv.textContent = message;

  // Show Candy Crush style badge
  showBadge(badgeText, level);
}
