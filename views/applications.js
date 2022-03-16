import Application from "../components/application.js";

function Applications(doc, options){

    let targetBody = document.getElementById('body');

    let contentGlobalApp = document.createElement('div')
    contentGlobalApp.classList.add('content__global_app')
    contentGlobalApp.id = "content__global_app"
    targetBody.append(contentGlobalApp)

    let cardViewHTML = document.createElement('div')
    cardViewHTML.classList.add('card__views')
    cardViewHTML.id = "card__views"
    let titleHTML = document.createElement('h1')
    titleHTML.innerText = "Applications"
    cardViewHTML.append(titleHTML)
    contentGlobalApp.append(cardViewHTML)

    let containerViewHTML = document.createElement('div')
    containerViewHTML.classList.add('container__views')
    containerViewHTML.id = "container__views"
    contentGlobalApp.append(containerViewHTML)

    let parentHTML = document.createElement('div')
    parentHTML.classList.add('parent')
    containerViewHTML.append(parentHTML)

    let application = [
        {
            dom: 'div1',
            title: 'Discord',
            logo: './assets/images/100/discord.png',
            small_logo: './assets/images/50/discord.png',
            url: 'https://discord.com/app'
        },
        {
            dom: 'div2',
            title: 'Canary',
            logo: './assets/images/100/canary.png',
            small_logo: './assets/images/50/canary.png',
            url: 'https://canary.discord.com/app'
        }, 
        {
            dom: 'div3',
            title: 'Whatsapp',
            logo: './assets/images/100/whatsapp.png',
            small_logo: './assets/images/50/whatsapp.png',
            url: 'https://web.whatsapp.com/'
        }, 
        {
            dom: 'div4',
            title: 'Telegram',
            logo: './assets/images/100/telegram-app.png',
            small_logo: './assets/images/50/telegram-app.png',
            url: 'https://web.telegram.org/'
        }, 
        {
            dom: 'div5',
            title: 'Messenger',
            logo: './assets/images/100/facebook-messenger.png',
            small_logo: './assets/images/50/facebook-messenger.png',
            url: 'https://www.facebook.com/messages'
        }, 
        {
            dom: 'div6',
            title: 'Slack',
            logo: './assets/images/100/slack-new.png',
            small_logo: './assets/images/50/slack-new.png',
            url: 'https://slack.com/signin'
        }, 
        {
            dom: 'div7',
            title: 'Element',
            logo: './assets/images/100/element.png',
            small_logo: './assets/images/50/element.png',
            url: 'https://app.element.io/'
        }, 
        {
            dom: 'div8',
            title: 'Skype',
            logo: './assets/images/100/skype.png',
            small_logo: './assets/images/50/skype.png',
            url: 'https://web.skype.com/'
        }
    ]

    application.forEach(element => {

        let divHTML = document.createElement('div')
        divHTML.classList.add(element.dom)
        parentHTML.append(divHTML)

        Application(divHTML, {
            title: element.title,
            logo: element.logo,
            small_logo: element.small_logo,
            url: element.url
        });

    });

    let parentDeuxHTML = document.createElement('div')
    parentDeuxHTML.classList.add('parent')
    containerViewHTML.append(parentDeuxHTML)

    let applicationDeux = [
        {
            dom: 'div1',
            title: 'Android message',
            logo: './assets/images/100/sms.png',
            small_logo: './assets/images/50/sms.png',
            url: 'https://messages.google.com/web'
        },
        {
            dom: 'div2',
            title: 'Wechat',
            logo: './assets/images/100/weixing.png',
            small_logo: './assets/images/50/weixing.png',
            url: 'https://web.wechat.com/'
        }, 
        {
            dom: 'div3',
            title: 'Threema',
            logo: './assets/images/100/threema.png',
            small_logo: './assets/images/50/threema.png',
            url: 'https://web.threema.ch/'
        }, 
        {
            dom: 'div4',
            title: 'Hangouts',
            logo: './assets/images/100/hangouts.png',
            small_logo: './assets/images/50/hangouts.png',
            url: 'https://hangouts.google.com/'
        }, 
        {
            dom: 'div5',
            title: 'Steam Chat',
            logo: './assets/images/100/steam.png',
            small_logo: './assets/images/50/steam.png',
            url: 'https://steamcommunity.com/chat/'
        }, 
        {
            dom: 'div6',
            title: 'Crisp',
            logo: './assets/images/100/crisp.png',
            small_logo: './assets/images/50/crisp.png',
            url: 'https://app.crisp.chat/'
        }, 
        {
            dom: 'div7',
            title: 'Gitter',
            logo: './assets/images/100/gitter.png',
            small_logo: './assets/images/50/gitter.png',
            url: 'https://gitter.im/login?action=login&source=apps-login#'
        }, 
        {
            dom: 'div8',
            title: 'ICQ New',
            logo: './assets/images/100/icq.png',
            small_logo: './assets/images/50/icq.png',
            url: 'https://web.icq.com/'
        }
    ]

    applicationDeux.forEach(element => {

        let divHTML = document.createElement('div')
        divHTML.classList.add(element.dom)
        parentDeuxHTML.append(divHTML)

        Application(divHTML, {
            title: element.title,
            logo: element.logo,
            small_logo: element.small_logo,
            url: element.url
        });

    });

    let parentTroisHTML = document.createElement('div')
    parentTroisHTML.classList.add('parent')
    containerViewHTML.append(parentTroisHTML)

    let applicationTrois = [
        {
            dom: 'div1',
            title: 'Flock',
            logo: './assets/images/100/flock.png',
            small_logo: './assets/images/50/flock.png',
            url: 'https://web.flock.com/'
        },
        {
            dom: 'div2',
            title: 'Spectrum',
            logo: './assets/images/100/spectrum.png',
            small_logo: './assets/images/50/spectrum.png',
            url: 'https://spectrum.chat/'
        }, 
        {
            dom: 'div3',
            title: 'Voxer',
            logo: './assets/images/100/voxer.png',
            small_logo: './assets/images/50/voxer.png',
            url: 'https://web.voxer.com/'
        }, 
        {
            dom: 'div4',
            title: 'Flowdock',
            logo: './assets/images/100/flowdock.png',
            small_logo: './assets/images/50/flowdock.png',
            url: 'https://www.flowdock.com/app'
        }, 
        {
            dom: 'div5',
            title: 'Mattermost',
            logo: './assets/images/100/mattermost.png',
            small_logo: './assets/images/50/mattermost.png',
            url: 'https://customers.mattermost.com/cloud/connect-workspace'
        }, 
        {
            dom: 'div6',
            title: 'Wire',
            logo: './assets/images/100/wire.png',
            small_logo: './assets/images/50/wire.png',
            url: 'https://app.wire.com/'
        }, 
        {
            dom: 'div7',
            title: 'Missive',
            logo: './assets/images/100/missive.png',
            small_logo: './assets/images/50/missive.png',
            url: 'https://mail.missiveapp.com/'
        }, 
        {
            dom: 'div8',
            title: 'Tawk',
            logo: './assets/images/100/tawk.png',
            small_logo: './assets/images/50/tawk.png',
            url: 'https://dashboard.tawk.to/'
        }
    ]

    applicationTrois.forEach(element => {

        let divHTML = document.createElement('div')
        divHTML.classList.add(element.dom)
        parentTroisHTML.append(divHTML)

        Application(divHTML, {
            title: element.title,
            logo: element.logo,
            small_logo: element.small_logo,
            url: element.url
        });

    });

    let parentQuatreHTML = document.createElement('div')
    parentQuatreHTML.classList.add('parent')
    containerViewHTML.append(parentQuatreHTML)

    let applicationQuatre = [
        {
            dom: 'div1',
            title: 'Zoom',
            logo: './assets/images/100/zoom.png',
            small_logo: './assets/images/50/zoom.png',
            url: 'https://zoom.us/join'
        },
        {
            dom: 'div2',
            title: 'Microsoft Teams',
            logo: './assets/images/100/microsoft-teams.png',
            small_logo: './assets/images/50/microsoft-teams.png',
            url: 'https://teams.microsoft.com/'
        }, 
        {
            dom: 'div3',
            title: 'Gmail',
            logo: './assets/images/100/gmail.png',
            small_logo: './assets/images/50/gmail.png',
            url: 'https://mail.google.com/'
        }, 
        {
            dom: 'div4',
            title: 'ProtonMail',
            logo: './assets/images/100/protonmail.png',
            small_logo: './assets/images/50/protonmail.png',
            url: 'https://mail.protonmail.com'
        }, 
        {
            dom: 'div5',
            title: 'Twitter',
            logo: './assets/images/100/twitter.png',
            small_logo: './assets/images/50/twitter.png',
            url: 'https://twitter.com/messages'
        }, 
        {
            dom: 'div6',
            title: 'Instagram',
            logo: './assets/images/100/instagram.png',
            small_logo: './assets/images/50/instagram.png',
            url: 'https://www.instagram.com/'
        }, 
        {
            dom: 'div7',
            title: 'Google Meet',
            logo: './assets/images/100/google-meet.png',
            small_logo: './assets/images/50/google-meet.png',
            url: 'https://meet.google.com/'
        }, 
        {
            dom: 'div8',
            title: 'Linkedin',
            logo: './assets/images/100/linkedin.png',
            small_logo: './assets/images/50/linkedin.png',
            url: 'https://www.linkedin.com/feed/'
        }
    ]

    applicationQuatre.forEach(element => {

        let divHTML = document.createElement('div')
        divHTML.classList.add(element.dom)
        parentQuatreHTML.append(divHTML)

        Application(divHTML, {
            title: element.title,
            logo: element.logo,
            small_logo: element.small_logo,
            url: element.url
        });

    });

    let parentCinqHTML = document.createElement('div')
    parentCinqHTML.classList.add('parent')
    containerViewHTML.append(parentCinqHTML)

    let applicationCinq = [
        {
            dom: 'div1',
            title: 'Notion',
            logo: './assets/images/100/notion.png',
            small_logo: './assets/images/50/notion.png',
            url: 'https://www.notion.so/login'
        },
        {
            dom: 'div2',
            title: 'Twitch',
            logo: './assets/images/100/twitch.png',
            small_logo: './assets/images/50/twitch.png',
            url: 'https://www.twitch.tv/'
        }, 
        {
            dom: 'div3',
            title: 'Youtube',
            logo: './assets/images/100/youtube.png',
            small_logo: './assets/images/50/youtube.png',
            url: 'https://www.youtube.com/'
        }, 
        // {
        //     dom: 'div4',
        //     title: 'ProtonMail',
        //     logo: 'https://img.icons8.com/fluency/100/000000/protonmail.png',
        //     small_logo: 'https://img.icons8.com/fluency/50/000000/protonmail.png',
        //     url: 'https://mail.protonmail.com'
        // }, 
        // {
        //     dom: 'div5',
        //     title: 'Twitter',
        //     logo: 'https://img.icons8.com/stickers/100/000000/twitter.png',
        //     small_logo: 'https://img.icons8.com/stickers/50/000000/twitter.png',
        //     url: 'https://twitter.com/messages'
        // }, 
        // {
        //     dom: 'div6',
        //     title: 'Instagram',
        //     logo: 'https://img.icons8.com/stickers/100/000000/instagram-new--v2.png',
        //     small_logo: 'https://img.icons8.com/stickers/50/000000/instagram-new--v2.png',
        //     url: 'https://www.instagram.com/'
        // }, 
        // {
        //     dom: 'div7',
        //     title: 'Google Meet',
        //     logo: 'https://img.icons8.com/fluency/100/000000/google-meet.png',
        //     small_logo: 'https://img.icons8.com/fluency/50/000000/google-meet.png',
        //     url: 'https://meet.google.com/'
        // }, 
        // {
        //     dom: 'div8',
        //     title: 'Linkedin',
        //     logo: 'https://img.icons8.com/stickers/100/000000/linkedin.png',
        //     small_logo: 'https://img.icons8.com/stickers/50/000000/linkedin.png',
        //     url: 'https://www.linkedin.com/feed/'
        // }
    ]

    applicationCinq.forEach(element => {

        let divHTML = document.createElement('div')
        divHTML.classList.add(element.dom)
        parentCinqHTML.append(divHTML)

        Application(divHTML, {
            title: element.title,
            logo: element.logo,
            small_logo: element.small_logo,
            url: element.url
        });

    });


}

export default Applications;