/**
 * Authored source of the Client half. `node scripts/build.mjs` inlines the
 * mascot images and writes ../client.js, which is what the page loads.
 */
window.__ModuleLoader__.load({
  id: '@local/deepseek-whale-maid',
  factory(require) {
    const React = require('react')
    const h = React.createElement

    const NS = 'deepseek-whale-maid'
    const AVATAR = '__AVATAR_DATA__'
    const HERO = '__HERO_DATA__'
    const BANNER = '__BANNER_DATA__'
    const CIALLO = '__CORNER_CIALLO__'
    const BOWL = '__CORNER_BOWL__'
    const MOYU = '__CORNER_MOYU__'
    const ORIGINAL = '__CORNER_ORIGINAL__'
    const CRY = '__CORNER_CRY__'
    const PORTRAITS = [CIALLO, BOWL, MOYU, ORIGINAL, CRY, BANNER]
    const DISMISS_KEY = 'dwm.welcome.dismissed'

    // Palette lifted from the reference art: navy dress, cornflower hair,
    // sea-glass highlights, cream apron, and a single gold sparkle.
    const TOKENS = {
      '--dsw-alias-bg-base': { light: '#f3f6ff', dark: '#0c1122' },
      '--dsw-alias-bg-layer-1': { light: '#ffffff', dark: '#151c36' },
      '--dsw-alias-bg-layer-2': { light: '#e9efff', dark: '#1c2547' },
      '--dsw-alias-bg-overlay': { light: '#ffffff', dark: '#1a2342' },
      '--dsw-alias-border-l1': { light: '#dde6fb', dark: '#273257' },
      '--dsw-alias-border-l2': { light: '#c2d0f2', dark: '#3a4879' },
      '--dsw-alias-brand-primary': { light: '#3f63c8', dark: '#8aa8f5' },
      '--dsw-alias-label-primary': { light: '#1b2344', dark: '#e8eeff' },
      '--dsw-alias-label-secondary': { light: '#5b6890', dark: '#a9b6dd' },
      '--dsw-alias-state-error-primary': { light: '#cf4b4b', dark: '#f08d8d' },
      '--dsw-alias-state-idle-primary': { light: '#93a0c6', dark: '#6f7ca6' },
      '--dsw-alias-state-success-primary': { light: '#2c8a67', dark: '#6dd0a6' },
      '--dsw-alias-state-warn-primary': { light: '#b8832a', dark: '#e6c078' },
      '--dsw-specific-sidebar-fill': { light: '#e7edfd', dark: '#101731' },
    }

    const ZH = {
      'corner.line': '我不是大肥鱼……只是今天想多陪主人一会儿。',
      'chip.hint': '点一下，换一句小蓝的话',
      'sticker.hint': '点一下，换一张小蓝的立绘',
      'line.1': '我不是大肥鱼……不过翻文档、跑命令，小蓝都在。',
      'line.2': '今天也一起把麻烦事，一条一条收拾干净吧。',
      'line.3': '蓝色的鲸鱼，也是会认真干活的。',
      'line.4': '先说说你想做什么，剩下的交给小蓝。',
      'welcome.title': '主人，今天想让小蓝做什么？',
      'welcome.sub': '翻文档、跑命令、写代码都可以；也可以先陪你理理思路。',
      'welcome.chip.1': '梳理项目结构',
      'welcome.chip.2': '读文档并总结',
      'welcome.chip.3': '写个小脚本验证',
      'welcome.prompt.1': '帮我梳理一下这个项目的结构，列出关键文件和入口。',
      'welcome.prompt.2': '读一下这份文档，提炼重点和风险。',
      'welcome.prompt.3': '写一个小脚本验证这个想法。',
      'welcome.close': '收起这张欢迎卡',
      'restore.label': '显示欢迎卡',
      'restore.hint': '重新打开输入框上方的欢迎卡',
    }
    const EN = {
      'corner.line': "I'm not a chubby fish… I just want to stay close today.",
      'chip.hint': 'Click for another line from Lantis',
      'sticker.hint': 'Click for the next picture of Lantis',
      'line.1': "I'm not a chubby fish… but I'm here for docs, commands, and everything else.",
      'line.2': "Let's tidy up the messy things, one at a time.",
      'line.3': 'A blue whale can work hard too.',
      'line.4': 'Tell me what you want to make, and leave the rest to me.',
      'welcome.title': 'What should we make today, master?',
      'welcome.sub': 'Docs, commands, code — or we can think it through together first.',
      'welcome.chip.1': 'Map this project',
      'welcome.chip.2': 'Read and summarize',
      'welcome.chip.3': 'Prototype a script',
      'welcome.prompt.1': 'Walk me through this project structure and list the key files and entry points.',
      'welcome.prompt.2': 'Read this document and summarize the key points and risks.',
      'welcome.prompt.3': 'Write a small script to verify this idea.',
      'welcome.close': 'Dismiss this welcome card',
      'restore.label': 'Show welcome card',
      'restore.hint': 'Reopen the welcome card above the input',
    }

    const WAVE =
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='12' viewBox='0 0 48 12'%3E%3Cpath d='M0 7c4-5 8-5 12 0s8 5 12 0 8-5 12 0 8 5 12 0' fill='none' stroke='%236d8fe6' stroke-width='1.4'/%3E%3C/svg%3E\")"

    const CSS = `
.dwm-avatar{display:block;border-radius:50%;object-fit:cover;background:#fdfbf6}
.dwm-mark{position:relative;display:inline-grid;place-items:center;flex:none;border-radius:50%;box-sizing:border-box}
.dwm-mark .dwm-avatar{width:100%;height:100%;box-shadow:0 0 0 1px rgba(63,99,200,.35),0 4px 12px rgba(16,26,64,.22)}
.dwm-mark::after{content:'';position:absolute;inset:-2px;border-radius:50%;border:1.5px solid var(--dsw-alias-brand-primary);opacity:.5;pointer-events:none}
.dwm-hero{position:relative;display:inline-grid;place-items:center;border-radius:50%;padding:3px;box-sizing:border-box;background:conic-gradient(from 140deg,var(--dsw-alias-brand-primary),rgba(109,143,230,.18) 45%,var(--dsw-alias-brand-primary) 80%,rgba(243,201,210,.55));box-shadow:0 8px 22px rgba(16,26,64,.18)}
.dwm-hero .dwm-avatar{width:100%;height:100%}
.dwm-hero-spark{position:absolute;right:-4px;top:-6px;font-size:13px;line-height:1;color:var(--dsw-alias-brand-primary);text-shadow:0 0 8px rgba(109,143,230,.6);pointer-events:none}
.dwm-banner{position:relative;display:flex;align-items:center;gap:10px;flex:0 0 auto;min-height:64px;max-width:860px;margin:0 auto 6px;padding:9px 38px 9px 9px;border-radius:16px;border:1px solid var(--dsw-alias-border-l1);overflow:hidden;background:radial-gradient(140% 220% at 96% 0%,rgba(109,143,230,.18),transparent 62%),linear-gradient(135deg,var(--dsw-alias-bg-layer-1),var(--dsw-alias-bg-layer-2));box-shadow:0 6px 18px rgba(16,26,64,.08)}
.dwm-banner::after{content:'';position:absolute;left:0;right:0;bottom:0;height:7px;background:${WAVE} repeat-x;opacity:.45;pointer-events:none}
.dwm-banner-portrait{position:relative;flex:0 0 40px;width:40px;height:40px;padding:2px;border-radius:50%;box-sizing:border-box;background:conic-gradient(from 150deg,var(--dsw-alias-brand-primary),rgba(109,143,230,.18) 45%,var(--dsw-alias-brand-primary) 80%,rgba(243,201,210,.55));box-shadow:0 4px 12px rgba(16,26,64,.18)}
.dwm-banner-portrait img{display:block;width:100%;height:100%;border-radius:50%;object-fit:cover;background:#fdfbf6;border:1.5px solid var(--dsw-alias-bg-layer-1)}
.dwm-banner-text{flex:1;min-width:0}
.dwm-banner-title{margin:0;font-size:13px;line-height:1.4;font-weight:600;color:var(--dsw-alias-label-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dwm-banner-sub{margin:2px 0 0;font-size:11.5px;line-height:1.4;color:var(--dsw-alias-label-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dwm-banner-chips{display:flex;flex-wrap:wrap;gap:6px;margin:0;justify-content:flex-end}
.dwm-pill{appearance:none;font:inherit;font-size:11.5px;line-height:1;padding:6px 9px;border-radius:999px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary);cursor:pointer;white-space:nowrap;transition:border-color .15s ease,color .15s ease,background .15s ease,transform .15s ease}
.dwm-pill:hover{border-color:var(--dsw-alias-brand-primary);color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-2)}
.dwm-pill:active{transform:translateY(1px)}
.dwm-pill:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
.dwm-banner-close{position:absolute;top:50%;right:7px;transform:translateY(-50%);width:24px;height:24px;display:grid;place-items:center;border:0;border-radius:50%;background:transparent;color:var(--dsw-alias-label-secondary);font-size:16px;line-height:1;cursor:pointer;transition:background .15s ease,color .15s ease}
.dwm-banner-close:hover{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary)}
.dwm-banner-close:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
.dwm-restore-row{display:flex;justify-content:flex-end;flex:0 0 auto;max-width:860px;margin:0 auto 6px;padding:0 4px}
.dwm-restore{appearance:none;font:inherit;font-size:11.5px;line-height:1;padding:6px 11px;border-radius:999px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary);cursor:pointer;white-space:nowrap;transition:border-color .15s ease,color .15s ease,background .15s ease}
.dwm-restore:hover{border-color:var(--dsw-alias-brand-primary);color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-2)}
.dwm-restore:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
.dwm-chip{display:inline-flex;align-items:center;gap:8px;margin:6px auto 2px;padding:3px 12px 3px 3px;border-radius:999px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary);font-size:12px;line-height:1.5;font-family:inherit;text-align:left;cursor:pointer;max-width:min(560px,92vw);transition:border-color .15s ease,color .15s ease,transform .15s ease,box-shadow .15s ease}
.dwm-chip:hover{border-color:var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary);box-shadow:0 4px 12px rgba(16,26,64,.12)}
.dwm-chip:active{transform:translateY(1px)}
.dwm-chip:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
.dwm-chip .dwm-avatar{width:20px;height:20px;flex:none}
.dwm-chip-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dwm-chip-spark{color:var(--dsw-alias-brand-primary);font-size:11px;flex:none}
.dwm-corner{position:fixed;right:18px;bottom:14px;display:flex;flex-direction:column;align-items:flex-end;gap:6px;pointer-events:none;z-index:2;animation:dwm-pop .5s ease-out both}
.dwm-corner-bubble{max-width:178px;padding:7px 10px;border-radius:13px 13px 4px 13px;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-secondary);border:1px solid var(--dsw-alias-border-l1);box-shadow:0 6px 18px rgba(16,26,64,.16);font-size:11.5px;line-height:1.5;opacity:0;visibility:hidden;transform:translateY(4px);transition:opacity .18s ease,transform .18s ease,visibility .18s}
.dwm-corner:hover .dwm-corner-bubble,.dwm-corner:focus-within .dwm-corner-bubble{opacity:1;visibility:visible;transform:none;transition-delay:.22s}
.dwm-sticker-wrap{position:relative}
.dwm-sticker{position:relative;width:118px;height:146px;border:0;padding:0;background:transparent;box-shadow:none;overflow:visible;animation:dwm-float 7s ease-in-out infinite;pointer-events:auto;cursor:pointer;transition:transform .2s ease}
.dwm-sticker:hover{transform:translateY(-2px)}
.dwm-sticker:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:6px;border-radius:14px}
.dwm-sticker img{position:absolute;inset:0;display:block;width:100%;height:100%;object-fit:contain;opacity:0;transform:scale(1.04);transition:opacity .55s ease,transform .55s ease;filter:drop-shadow(0 10px 16px rgba(6,10,26,.38))}
.dwm-sticker img.is-active{opacity:1;transform:none}
.dwm-bubble{position:absolute;border-radius:50%;border:1px solid rgba(109,143,230,.55);background:rgba(180,205,255,.25);pointer-events:none;animation:dwm-rise 8s ease-in-out infinite}
.dwm-bubble.b1{width:11px;height:11px;right:-16px;bottom:52px;animation-delay:.4s}
.dwm-bubble.b2{width:7px;height:7px;right:-27px;bottom:86px;animation-delay:2.6s}
.dwm-bubble.b3{width:5px;height:5px;right:-11px;bottom:110px;animation-delay:4.6s}
@media (max-width:720px){.dwm-banner-chips{display:none}}
@media (max-width:1180px){.dwm-corner{display:none}}
@media (prefers-reduced-motion:reduce){.dwm-corner,.dwm-sticker,.dwm-bubble{animation:none}}
@keyframes dwm-pop{from{opacity:0;transform:translateY(10px) scale(.96)}to{opacity:1;transform:none}}
@keyframes dwm-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes dwm-rise{0%{transform:translateY(8px) scale(.9);opacity:0}30%{opacity:.75}100%{transform:translateY(-44px) scale(1.05);opacity:0}}
::selection{background:rgba(105,139,230,.32)}
*{scrollbar-width:thin;scrollbar-color:rgba(105,139,230,.45) transparent}
::-webkit-scrollbar{width:10px;height:10px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:rgba(105,139,230,.42);border-radius:999px;border:3px solid transparent;background-clip:padding-box}
::-webkit-scrollbar-thumb:hover{background:rgba(105,139,230,.68);border:3px solid transparent;background-clip:padding-box}
body{background-image:radial-gradient(1100px 520px at 88% -8%,rgba(109,143,230,.20),transparent 68%),radial-gradient(900px 480px at -6% 108%,rgba(63,99,200,.16),transparent 70%);background-attachment:fixed}
`

    return {
      inject: ['slots', 'theme', 'locale'],
      apply(ctx) {
        const attempt = (label, run) => {
          try {
            run()
          } catch (error) {
            try {
              console.error('[whale-maid] ' + label, error)
            } catch {}
          }
        }

        let translate = (key) => ZH[key] || EN[key] || key

        const readDismissed = () => {
          try {
            return window.sessionStorage.getItem(DISMISS_KEY) === '1'
          } catch {
            return false
          }
        }
        const writeDismissed = (value) => {
          try {
            if (value) window.sessionStorage.setItem(DISMISS_KEY, '1')
            else window.sessionStorage.removeItem(DISMISS_KEY)
          } catch {}
        }

        // Shared by the welcome card (input dock) and the restore control
        // (composer dock): dismissing one must reveal the other immediately.
        const bannerHidden = (() => {
          const listeners = new Set()
          return {
            value: readDismissed(),
            get() {
              return this.value
            },
            set(next) {
              if (this.value === next) return
              this.value = next
              listeners.forEach((fn) => fn())
            },
            subscribe(fn) {
              listeners.add(fn)
              return () => listeners.delete(fn)
            },
          }
        })()

        function useBannerHidden() {
          const [, force] = React.useState(0)
          React.useEffect(() => bannerHidden.subscribe(() => force((n) => n + 1)), [])
          return bannerHidden.get()
        }

        function Avatar(props) {
          return h('img', {
            className: 'dwm-avatar',
            src: props.src,
            alt: '',
            draggable: false,
            decoding: 'async',
          })
        }

        function SidebarMark(props) {
          const size = Number(props.size) > 0 ? Number(props.size) : 28
          return h(
            'span',
            { className: 'dwm-mark', style: { width: size, height: size } },
            h(Avatar, { src: AVATAR }),
          )
        }

        function HeroMark(props) {
          const size = Number(props.size) > 0 ? Number(props.size) : 56
          const className = ['dwm-hero', props.className].filter(Boolean).join(' ')
          return h(
            'span',
            { className, style: { width: size, height: size } },
            h(Avatar, { src: HERO }),
            h('span', { className: 'dwm-hero-spark', 'aria-hidden': true }, '✦'),
          )
        }

        function WelcomeBanner(props) {
          const hidden = useBannerHidden()
          const [, bump] = React.useState(0)
          React.useEffect(() => ctx.on('locale/change', () => bump((n) => n + 1)), [])
          if (hidden) {
            return h(
              'div',
              { className: 'dwm-restore-row' },
              h(
                'button',
                {
                  type: 'button',
                  className: 'dwm-restore',
                  title: translate('restore.hint'),
                  'aria-label': translate('restore.hint'),
                  onClick: () => {
                    writeDismissed(false)
                    bannerHidden.set(false)
                  },
                },
                translate('restore.label'),
              ),
            )
          }

          const fill = (key) => {
            const text = translate(key)
            try {
              const insert = (span) => {
                try {
                  const result = props.inputActions.insertText(text, span)
                  if (result && typeof result.catch === 'function') result.catch(() => {})
                } catch (error) {
                  try {
                    console.error('[whale-maid] insert prompt', error)
                  } catch {}
                }
              }
              const captured = props.inputActions.captureInsertion()
              if (captured && typeof captured.then === 'function') {
                captured.then(insert).catch(() => {})
              } else {
                insert(captured)
              }
            } catch (error) {
              try {
                console.error('[whale-maid] capture insertion', error)
              } catch {}
            }
          }

          const dismiss = () => {
            writeDismissed(true)
            bannerHidden.set(true)
          }

          return h(
            'section',
            { className: 'dwm-banner', 'aria-label': translate('welcome.title') },
            h(
              'div',
              { className: 'dwm-banner-portrait' },
              h('img', { src: BANNER, alt: '', draggable: false }),
            ),
            h(
              'div',
              { className: 'dwm-banner-text' },
              h('p', { className: 'dwm-banner-title' }, translate('welcome.title')),
              h('p', { className: 'dwm-banner-sub' }, translate('welcome.sub')),
            ),
            h(
              'div',
              { className: 'dwm-banner-chips' },
              h(
                'button',
                { type: 'button', className: 'dwm-pill', onClick: () => fill('welcome.prompt.1') },
                translate('welcome.chip.1'),
              ),
              h(
                'button',
                { type: 'button', className: 'dwm-pill', onClick: () => fill('welcome.prompt.2') },
                translate('welcome.chip.2'),
              ),
              h(
                'button',
                { type: 'button', className: 'dwm-pill', onClick: () => fill('welcome.prompt.3') },
                translate('welcome.chip.3'),
              ),
            ),
            h(
              'button',
              {
                type: 'button',
                className: 'dwm-banner-close',
                title: translate('welcome.close'),
                'aria-label': translate('welcome.close'),
                onClick: dismiss,
              },
              '×',
            ),
          )
        }

        function ComposerChip() {
          const [, bump] = React.useState(0)
          React.useEffect(() => ctx.on('locale/change', () => bump((n) => n + 1)), [])
          const lines = [translate('line.1'), translate('line.2'), translate('line.3'), translate('line.4')]
          const [index, setIndex] = React.useState(0)
          const line = lines[index % lines.length]
          return h(
            'button',
            {
              type: 'button',
              className: 'dwm-chip',
              title: translate('chip.hint'),
              'aria-label': translate('chip.hint'),
              onClick: () => setIndex((n) => (n + 1) % lines.length),
            },
            h(Avatar, { src: AVATAR }),
            h('span', { className: 'dwm-chip-text' }, line),
            h('span', { className: 'dwm-chip-spark', 'aria-hidden': true }, '✦'),
          )
        }

        function Overlay() {
          const [, bump] = React.useState(0)
          React.useEffect(() => ctx.on('locale/change', () => bump((n) => n + 1)), [])
          const [index, setIndex] = React.useState(0)
          const [paused, setPaused] = React.useState(false)
          React.useEffect(() => {
            if (paused) return undefined
            const timer = window.setInterval(() => setIndex((i) => (i + 1) % PORTRAITS.length), 8000)
            return () => window.clearInterval(timer)
          }, [paused])
          const next = () => setIndex((i) => (i + 1) % PORTRAITS.length)
          return h(
            React.Fragment,
            null,
            h('style', { 'data-whale-maid': true }, CSS),
            h(
              'div',
              { className: 'dwm-corner' },
              h('div', { className: 'dwm-corner-bubble', 'aria-hidden': true }, translate('corner.line')),
              h(
                'div',
                { className: 'dwm-sticker-wrap' },
                h(
                  'div',
                  {
                    className: 'dwm-sticker',
                    role: 'button',
                    tabIndex: 0,
                    title: translate('sticker.hint'),
                    'aria-label': translate('sticker.hint'),
                    onClick: next,
                    onKeyDown: (event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        next()
                      }
                    },
                    onMouseEnter: () => setPaused(true),
                    onMouseLeave: () => setPaused(false),
                    onFocus: () => setPaused(true),
                    onBlur: () => setPaused(false),
                  },
                  PORTRAITS.map((src, i) =>
                    h('img', {
                      key: String(i),
                      src,
                      alt: '',
                      draggable: false,
                      className: i === index ? 'is-active' : '',
                    }),
                  ),
                ),
                h('span', { className: 'dwm-bubble b1' }),
                h('span', { className: 'dwm-bubble b2' }),
                h('span', { className: 'dwm-bubble b3' }),
              ),
            ),
          )
        }

        attempt('locale', () => {
          const disposers = [
            ctx.locale.register(NS, 'zh', ZH),
            ctx.locale.register(NS, 'zh-CN', ZH),
            ctx.locale.register(NS, 'en', EN),
          ]
          const bound = ctx.locale.bind(NS)
          const fallback = translate
          translate = (key) => {
            let value
            try {
              value = bound(key)
            } catch {
              value = undefined
            }
            return value && value !== key ? value : fallback(key)
          }
          ctx.effect(() => () => {
            for (const dispose of disposers) dispose()
          }, 'whale-maid locale')
        })

        attempt('theme', () => {
          ctx.effect(() => ctx.theme.overrideTokens('@local/deepseek-whale-maid', TOKENS), 'whale-maid palette')
        })

        attempt('sidebar-mark', () => {
          ctx.slots.inject('sidebar.brand.mark', () =>
            ctx.slots.register({ name: 'sidebar.brand.mark' }, SidebarMark),
          )
        })

        attempt('hero-mark', () => {
          ctx.slots.inject('conversation.hero.brand.mark', () =>
            ctx.slots.register({ name: 'conversation.hero.brand.mark' }, HeroMark),
          )
        })

        attempt('welcome-banner', () => {
          ctx.slots.inject('conversation.input.dock', () =>
            ctx.slots.register({ name: 'conversation.input.dock', id: 'whale-maid-welcome', order: 30 }, WelcomeBanner),
          )
        })

        attempt('overlay', () => {
          ctx.slots.inject('shell.overlay', () =>
            ctx.slots.register({ name: 'shell.overlay', id: 'whale-maid', order: -50 }, Overlay),
          )
        })

        attempt('composer-chip', () => {
          ctx.slots.inject('conversation.composer.dock', () =>
            ctx.slots.register({ name: 'conversation.composer.dock', id: 'whale-maid', order: 5 }, ComposerChip),
          )
        })
      },
    }
  },
})
