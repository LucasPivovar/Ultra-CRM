// chat-bubble.js
document.addEventListener('DOMContentLoaded', () => {
    // Inject the CSS
    const style = document.createElement('style');
    style.textContent = `
        .ultra-chat-bubble {
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 56px;
            height: 56px;
            background-color: #2563EB; /* Primary Color */
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
            cursor: pointer;
            z-index: 9999;
            transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
        }
        .ultra-chat-bubble:hover {
            background-color: #1D4ED8;
            transform: scale(1.05);
            box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);
        }
        .ultra-chat-bubble svg {
            width: 26px;
            height: 26px;
        }
        @media (max-width: 768px) {
            .ultra-chat-bubble {
                bottom: 20px;
                right: 20px;
                width: 50px;
                height: 50px;
            }
            .ultra-chat-bubble svg {
                width: 22px;
                height: 22px;
            }
        }
    `;
    document.head.appendChild(style);

    // Inject the Bubble
    const bubble = document.createElement('div');
    bubble.className = 'ultra-chat-bubble';
    bubble.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
    `;
    
    // Add interaction logic
    bubble.addEventListener('click', () => {
        // Placeholder for real chat integration
        console.log('Live chat clicked');
        alert('Live chat em desenvolvimento...');
    });

    document.body.appendChild(bubble);
});
