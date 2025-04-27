document.getElementById('magicButton').addEventListener('click', function() {
    const messages = [
        "你施展了魔法！✨",
        "魔法成功！🎉",
        "你的魔法讓世界變得更美好！🌍",
        "施展魔法後，你感受到力量！💪"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('result').innerText = randomMessage;
});
