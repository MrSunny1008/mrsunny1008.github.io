function checkAnswers() {
    const form = document.getElementById('quiz-form');
    let allCorrect = true;

    // Question 1
    const q1 = form.elements['q1'];
    let q1Correct = false;
    for (let i = 0; i < q1.length; i++) {
        if (q1[i].checked && q1[i].value === 'key') {
            q1Correct = true;
            break;
        }
    }
    const q1Feedback = form.querySelector('.question:nth-of-type(1) .feedback');
    if (q1Correct) {
        q1Feedback.textContent = '恭喜你答对了！';
        q1Feedback.className = 'feedback correct';
    } else {
        q1Feedback.textContent = '这道题好像不太对，再仔细看看哦~';
        q1Feedback.className = 'feedback incorrect';
        allCorrect = false;
    }

    // Question 2
    const q2 = form.elements['q2'];
    const q2Answers = ['key1', 'key2', 'key3'];
    let q2Correct = true;
    for (let i = 0; i < q2.length; i++) {
        if (q2[i].checked && !q2Answers.includes(q2[i].value)) {
            q2Correct = false;
            break;
        }
        if (!q2[i].checked && q2Answers.includes(q2[i].value)) {
            q2Correct = false;
            break;
        }
    }
    const q2Feedback = form.querySelector('.question:nth-of-type(2) .feedback');
    if (q2Correct) {
        q2Feedback.textContent = '恭喜你答对了！';
        q2Feedback.className = 'feedback correct';
    } else {
        q2Feedback.textContent = '这道题好像不太对，再仔细检查看看哦~';
        q2Feedback.className = 'feedback incorrect';
        allCorrect = false;
    }

    // Question 3
    const q3 = form.elements['q3'];
    const q3Answers = ['key1', 'key2'];
    let q3Correct = true;
    for (let i = 0; i < q3.length; i++) {
        if (q3[i].checked && !q3Answers.includes(q3[i].value)) {
            q3Correct = false;
            break;
        }
        if (!q3[i].checked && q3Answers.includes(q3[i].value)) {
            q3Correct = false;
            break;
        }
    }
    const q3Feedback = form.querySelector('.question:nth-of-type(3) .feedback');
    if (q3Correct) {
        q3Feedback.textContent = '恭喜你答对了！';
        q3Feedback.className = 'feedback correct';
    } else {
        q3Feedback.textContent = '这道题好像不太对，再仔细检查看看哦~';
        q3Feedback.className = 'feedback incorrect';
        allCorrect = false;
    }

    // Question 4
    const q4 = form.elements['q4'];
    let q4Correct = false;
    for (let i = 0; i < q4.length; i++) {
        if (q4[i].checked && q4[i].value === 'key') {
            q4Correct = true;
            break;
        }
    }
    const q4Feedback = form.querySelector('.question:nth-of-type(4) .feedback');
    if (q4Correct) {
        q4Feedback.textContent = '恭喜你答对了！';
        q4Feedback.className = 'feedback correct';
    } else {
        q4Feedback.textContent = '这道题好像不太对，再仔细看看哦~';
        q4Feedback.className = 'feedback incorrect';
        allCorrect = false;
    }

    // Question 5
    const q5 = form.elements['q5'];
    const q5Answers = ['key1', 'key2', 'key3', 'key4'];
    let q5Correct = true;
    for (let i = 0; i < q5.length; i++) {
        if (q5[i].checked && !q5Answers.includes(q5[i].value)) {
            q5Correct = false;
            break;
        }
        if (!q5[i].checked && q5Answers.includes(q5[i].value)) {
            q5Correct = false;
            break;
        }
    }
    const q5Feedback = form.querySelector('.question:nth-of-type(5) .feedback');
    if (q5Correct) {
        q5Feedback.textContent = '恭喜你答对了！';
        q5Feedback.className = 'feedback correct';
    } else {
        q5Feedback.textContent = '这道题好像不太对，再仔细检查看看哦~';
        q5Feedback.className = 'feedback incorrect';
        allCorrect = false;
    }











    // Redirect if all correct
    if (allCorrect) {
        window.location.href = './passward.html'; // 将此处的URL替换为目标网页的URL
    }else {
        document.getElementById('password').style.display = 'block';
        document.getElementById('wrong').style.display = 'block';
        document.getElementById('password2').style.display = 'block';
    }
    
}
