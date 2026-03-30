// alert
function showAlert() {
  alert("ยินดีต้อนรับ!");
}

// รอ DOM โหลดก่อน
document.addEventListener("DOMContentLoaded", () => {
    const ruleCards = document.querySelectorAll(".rule-card");

    function showOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        ruleCards.forEach(card => {
            const boxTop = card.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                card.classList.add("show");
            }
        });
    }

    // เรียกครั้งแรก (กรณีโหลดมาแล้วเห็นเลย)
    showOnScroll();

    // ใช้ passive เพื่อให้ scroll ลื่นขึ้น
    window.addEventListener("scroll", showOnScroll, { passive: true });
});