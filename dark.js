const btn = document.getElementById("modeToggle");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // 回転アニメーション
    btn.style.transform = "rotate(360deg)";
    setTimeout(() => {
        btn.style.transform = "rotate(0deg)";
    }, 600);

    btn.textContent = document.body.classList.contains("dark") ? "☀" : "🌙";
});

<><a href="#contact" class="contact-button">お問い合わせ</a><section id="contact">
    < />!-- お問い合わせフォーム -->
</section></>
