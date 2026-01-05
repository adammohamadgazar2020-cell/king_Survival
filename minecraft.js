// فتح نافذة الطلب وتعديل المحتوى بناءً على الرتبة
function openOrderModal(rankName) {
    const modal = document.getElementById('orderModal');
    const targetRank = document.getElementById('targetRankName');
    
    targetRank.innerText = rankName;
    modal.style.display = 'flex';
}

// إغلاق نافذة الطلب
function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'none';
}

// معالجة طلب الشراء
function submitOrder() {
    const mcName = document.getElementById('mc-name').value;
    const dcName = document.getElementById('dc-name').value;
    const rank = document.getElementById('targetRankName').innerText;

    if (!mcName || !dcName) {
        alert("يا بطل، من فضلك املأ بياناتك بالكامل!");
        return;
    }

    // هنا يمكنك إضافة كود لإرسال البيانات إلى Webhook ديسكورد إذا أردت مستقبلاً
    alert(`أهلاً بك يا ${mcName}! تم إرسال طلب رتبة ${rank} للإدارة. تواصل معنا في الديسكورد لإكمال الدفع.`);
    closeOrderModal();
}

// تغيير حالة الروابط في القائمة العلوية عند السكرول أو الضغط
const navLinks = document.querySelectorAll('.nav-item');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// إغلاق المودال عند الضغط خارج المحتوى
window.onclick = function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target == modal) {
        closeOrderModal();
    }
}