// ========== 核心修复：自定义导航滚动 ==========
// 定义页面顺序和对应的滚动位置
const sectionOrder = ['home', 'blog', 'portfolio', 'share'];

// 计算目标 section 的滚动位置
function getScrollPosition(targetId) {
    const index = sectionOrder.indexOf(targetId);
    if (index === -1) return 0;
    // 每个 section 高度为 100vh
    // 注意：在移动端 section 高度可能不是 100vh，这里需要适配
    if (window.innerWidth <= 768) {
        const element = document.getElementById(targetId);
        return element ? element.offsetTop : 0;
    }
    return index * window.innerHeight;
}

// 平滑滚动到目标位置
function smoothScrollTo(targetPosition) {
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// 为所有导航链接添加点击事件
document.querySelectorAll('.nav-anchor').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // 阻止默认的锚点跳转
        const targetId = this.getAttribute('data-target');
        const targetPosition = getScrollPosition(targetId);
        smoothScrollTo(targetPosition);
    });
});

// Logo 点击回到首页
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', function() {
        smoothScrollTo(0);
    });
}

// ========== 导航栏滚动效果 + 高亮当前页面 ==========
const header = document.getElementById('navbar');
const navAnchors = document.querySelectorAll('.nav-anchor');

function updateActiveNav() {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    
    let currentSection = 'home';

    if (window.innerWidth <= 768) {
        // 移动端基于元素位置判断
        for (const id of sectionOrder) {
            const element = document.getElementById(id);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= vh / 3 && rect.bottom >= vh / 3) {
                    currentSection = id;
                    break;
                }
            }
        }
    } else {
        // 桌面端基于 sticky 堆叠逻辑
        let currentIndex = Math.round(scrollY / vh);
        currentIndex = Math.min(currentIndex, sectionOrder.length - 1);
        currentIndex = Math.max(currentIndex, 0);
        currentSection = sectionOrder[currentIndex];
    }
    
    // 更新导航高亮
    navAnchors.forEach(anchor => {
        if (anchor.getAttribute('data-target') === currentSection) {
            anchor.classList.add('active');
        } else {
            anchor.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', () => {
    // 导航栏模糊效果
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // 更新当前激活的导航项
    updateActiveNav();
});

// 初始化时执行一次
updateActiveNav();

// ========== 邮箱复制功能 ==========
function copyEmail() {
    const email = "hwe2377@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const toast = document.getElementById('copy-toast');
        toast.style.opacity = '1';
        toast.style.top = '40%';
        
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.top = '50%';
        }, 2000);
    }).catch(err => {
        console.error('复制失败:', err);
        // 备用方案：使用旧方法复制
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const toast = document.getElementById('copy-toast');
        toast.style.opacity = '1';
        toast.style.top = '40%';
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.top = '50%';
        }, 2000);
    });
}

// ========== 窗口大小改变时重新计算 ==========
window.addEventListener('resize', () => {
    updateActiveNav();
});