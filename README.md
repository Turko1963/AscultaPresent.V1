# ASCULTA AI · Conversation Intelligence Hub

Interactive design demo of the ASCULTA AI platform: every sales and retention call analyzed, agents coached like the best performer, and managers alerted the moment a conversation turns risky.

Everything is static HTML. Open `index.html`, or the GitHub Pages link once Pages is on:
**https://turko1963.github.io/AscultaPresent.V1/**

## Start here

| Open | What it is |
|---|---|
| `index.html` | Landing page, the start of the demo |
| `presentation.html` | Presentation for a PC or big screen. Every screen runs live inside the slides, with "Try it live" buttons |
| `presentation-mobile.html` | The same presentation for a phone |
| `briefing.html` | ASCULTA's own executive briefing page, unchanged |

## Demo path

Landing page → **Sign in** → choose a role → **Access platform**

- **Manager**: every screen, both desks, plus Pilot week.
- **Team lead**: every screen except Pilot week.
- **Agent**: only *My day*, *Live call* and *My calls*. Any other screen sends them back to *My day*.

## Screens

| File | Screen | Who |
|---|---|---|
| `dashboard.html` | Dashboard with the ASCULTA brief, KPIs, coverage, agents, risks | Manager, team lead |
| `live.html` | Live monitor: every call in progress, follow a call, whisper a tip | Manager, team lead |
| `conversations.html` | All conversations (100% coverage), filters and search | Manager, team lead |
| `call.html` | One conversation: waveform with markers, transcript, profile, coaching, risk | Manager, team lead |
| `risks.html` | Risk alerts queue, review, mark handled, assign coaching | Manager, team lead |
| `coaching.html` | Coaching playbook: techniques learned from top performers | Manager, team lead |
| `agents.html` | Agents: scores, trends, the gap to the top three | Manager, team lead |
| `customers.html` | Customer profiles and continuity, "before the next call" brief | Manager, team lead |
| `pilot.html` | Free 1-week pilot: day-by-day progress, setup checklist, planner | Manager |
| `agent-home.html` | *My day*: next customer with context, my coaching | Agent |
| `agent-live.html` | Live call: coaching tips, compliance guard, live profile, auto wrap-up | Agent |
| `agent-calls.html` | *My calls*: summary, tips, what went well, what to try next | Agent |
| `login.html` | Sign in with role choice | Everyone |

## Things to try

- **Ask ASCULTA** (top bar, or Ctrl/Cmd + K): ask "who needs coaching today?" or jump to any screen.
- **Agent live call**: press *Start call*. A tip appears and ticks off as Maya follows it, the compliance guard steps in, and *End call* writes the wrap-up. *Save* puts the call at the top of *My calls*.
- **Risk alerts**: handle an alert and the count updates on every screen.
- **Light / Dark** button at the bottom of the menu.

## Files

- `assets/app.css`, `assets/app.js`, `assets/ui.js`: shared design system and app shell
- `assets/data.js`: sample agents, calls, risks, techniques and customers
- `assets/deck.js`: slide content shared by both presentations
- `assets/asculta-sample-video.mp4`, `assets/ASCULTA_AI_CTO_Briefing.pptx`: the material ASCULTA sent

## Notes

- Customers are shown by reference only (for example C-48213).
- Sign-in accepts anything: this is a design demo with no real accounts, and no data leaves the page.
- Names and figures are sample data, based on ASCULTA's briefing.
