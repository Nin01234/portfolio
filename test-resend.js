const { Resend } = require('resend');

const resend = new Resend('re_WLkHWpU4_APD35RxBYZypMJ8yNf5rdBzt');

(async function () {
    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'innocentgh10@gmail.com',
            subject: 'Test Email',
            html: '<p>It works!</p>'
        });

        if (error) {
            console.error('Resend Error:', error);
        } else {
            console.log('Resend Success:', data);
        }
    } catch (err) {
        console.error('Script Error:', err);
    }
})();
