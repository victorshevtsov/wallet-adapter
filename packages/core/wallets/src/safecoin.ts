import { SafecoinWalletAdapter, SafecoinWalletAdapterConfig } from '@safecoin/wallet-adapter-safecoin';
import { Wallet, WalletName } from './types';

export const getSafecoinWallet = ({ provider, ...config }: SafecoinWalletAdapterConfig = {}): Wallet => ({
    name: WalletName.Safecoin,
    url: 'https://wallet.safecoin.org',
    icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6aT0iJmFtcDtuc19haTsiCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHNvZGlwb2RpOmRvY25hbWU9Im1pbmlzYWZlLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wICg0MDM1YTRmYjQ5LCAyMDIwLTA1LTAxKSIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDYuMzQ5OTk5OSA2LjM1MDAwMDIiCiAgIGhlaWdodD0iMjQiCiAgIHdpZHRoPSIyNCI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjE1NiIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDQwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI3NCIKICAgICB1bml0cz0icHgiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXJvdGF0aW9uPSIwIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iCiAgICAgaW5rc2NhcGU6Y3k9IjE2LjYwMjQxOSIKICAgICBpbmtzY2FwZTpjeD0iMTIuNDU4MTcyIgogICAgIGlua3NjYXBlOnpvb209IjIyLjQiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgaWQ9ImJhc2UiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpZD0ibGF5ZXIxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiPgogICAgPHN3aXRjaAogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMDE4Njg0NSwwLDAsMC4wMDE4Njg0NSwwLjIyMTMxMjQyLC0wLjEzNTMxMDQ5KSIKICAgICAgIGlkPSJzd2l0Y2g4NTUiPgoJPGZvcmVpZ25PYmplY3QKICAgcmVxdWlyZWRFeHRlbnNpb25zPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iCiAgIHg9IjAiCiAgIHk9IjAiCiAgIHdpZHRoPSIxIgogICBoZWlnaHQ9IjEiPgoJCQoJPC9mb3JlaWduT2JqZWN0PgoKCTxnCiAgIGk6ZXh0cmFuZW91cz0ic2VsZiIKICAgaWQ9Imc4NTMiPgoJCTxnCiAgIGlkPSJnODM5Ij4KCQkJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSAyMTUzLjMsMjIwMS4yIDE2MDAuOSwyNTIyIGMgLTMuMiwxLjkgLTcuMiwxLjkgLTEwLjUsMCB2IDAgbCAtMC4xLDI5Ni4xIDgxMC41LC00NzQuOSB6IgogICBpZD0icGF0aDgzNSIgLz4KCgkJCTxwb2x5Z29uCiAgIGNsYXNzPSJzdDAiCiAgIHBvaW50cz0iMTU5MCwxMDQgMTU5MC42LDUwMS40IDI2OTEuOCwxMTMxIDI0OTYuOCwxMjQzLjcgMTU5MC4yLDcyMi4xIDE1OTAuNiwxMDQ4LjYgMTU5MSwxMDQ4LjQgMjIzMy4zLDE0MTUuNyAyMjMzLDIwMjMuNyAyNzgwLjUsMjMzNy4yIDI3ODAuMywyMzQ2LjYgMTU5MS4zLDMwNDAuNyAxNTkxLjEsMzQ0NC42IDE1OTEuMywzNDQ0LjcgMzA0My4xLDI2MTAuNSAzMDQzLDkzOS4xIDE1OTEuOSwxMDIuOSAiCiAgIGlkPSJwb2x5Z29uODM3IiAvPgoKCQk8L2c+CgoJCTxwYXRoCiAgIGNsYXNzPSJzdDEiCiAgIGQ9Ik0gMzA0Myw5MzkuMSAxNTkxLjksMTAyLjkgMTQzLjcsOTM5LjcgdiAxNjcxIGwgMTQ0Ny43LDgzNCAxNDUxLjcsLTgzNC4zIHogbSAtMjYyLjcsMTQwNy41IC0xMTg5LDY5NC4yIC0xMTAyLjUsLTYyOS42IDE5MywtMTEzIDkwNy41LDUyMC41IDgxMS41LC00NzUuNSAtMjQ3LjUsLTE0MiAtNTUyLjQsMzIwLjggYyAtMy4yLDEuOSAtNy4yLDEuOSAtMTAuNSwwIGwgLTYzMy44LC0zNjcuMyAtMC4zLC02MzkgLTU1Ni44LC0zMTkuMyAxMTg2LjgsLTY5NS43IGMgMSwtMC42IDIuMiwtMC42IDMuMiwwIGwgMTEwMi4zLDYzMC4zIC0xOTUsMTEyLjggLTkwNi43LC01MjEuNyAtODA0LjIsNDcyIDI3OSwxNjAuMyA1MjYsLTMwNiA2NDIuMywzNjcuMyAtMC4zLDYwOCA1NDcuNSwzMTMuNSB6IgogICBpZD0icGF0aDg0MSIgLz4KCgkJPHBhdGgKICAgY2xhc3M9InN0MiIKICAgZD0ibSAxNzY1LjksMTYxNy44IGMgMCwtOTcuNyAtNzkuMiwtMTc3IC0xNzcsLTE3NyAtOTcuOCwwIC0xNzcsNzkuMiAtMTc3LDE3NyAwLDczLjYgNDUsMTM2LjggMTA4LjksMTYzLjQgbCAtNzYuNSwzNDkuOCBoIDI4OS4zIGwgLTc3LjEsLTM0OS42IGMgNjQuMywtMjYuNiAxMDkuNCwtODkuOCAxMDkuNCwtMTYzLjYgeiIKICAgaWQ9InBhdGg4NDMiIC8+CgoJCTxwYXRoCiAgIGNsYXNzPSJzdDMiCiAgIGQ9Im0gMTc2NS45LDE2MTcuOCBjIDAsLTk2LjYgLTc3LjQsLTE3NS4xIC0xNzMuNSwtMTc2LjkgbCAyLjMsNjkwLjIgaCAxMzkgbCAtNzcuMSwtMzQ5LjYgYyA2NC4yLC0yNi43IDEwOS4zLC04OS45IDEwOS4zLC0xNjMuNyB6IgogICBpZD0icGF0aDg0NSIgLz4KCgkJPGcKICAgaWQ9Imc4NTEiPgoJCQk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNIDIxNTMuMywyMjAxLjIgMTYwMC45LDI1MjIgYyAtMy4yLDEuOSAtNy4yLDEuOSAtMTAuNSwwIHYgMCBsIC0wLjEsMjk2LjEgODEwLjUsLTQ3NC45IHoiCiAgIGlkPSJwYXRoODQ3IiAvPgoKCQkJPHBvbHlnb24KICAgY2xhc3M9InN0MCIKICAgcG9pbnRzPSIxNTkwLDEwNCAxNTkwLjYsNTAxLjQgMjY5MS44LDExMzEgMjQ5Ni44LDEyNDMuNyAxNTkwLjIsNzIyLjEgMTU5MC42LDEwNDguNiAxNTkxLDEwNDguNCAyMjMzLjMsMTQxNS43IDIyMzMsMjAyMy43IDI3ODAuNSwyMzM3LjIgMjc4MC4zLDIzNDYuNiAxNTkxLjMsMzA0MC43IDE1OTEuMSwzNDQ0LjYgMTU5MS4zLDM0NDQuNyAzMDQzLjEsMjYxMC41IDMwNDMsOTM5LjEgMTU5MS45LDEwMi45ICIKICAgaWQ9InBvbHlnb244NDkiIC8+CgoJCTwvZz4KCgk8L2c+Cgo8L3N3aXRjaD4KICA8L2c+CiAgPHN0eWxlCiAgICAgdHlwZT0idGV4dC9jc3MiCiAgICAgaWQ9InN0eWxlODMzIj4KCS5zdDB7ZmlsbDojMEM3ODlGO30KCS5zdDF7ZmlsbDojMDc2OThEO30KCS5zdDJ7ZmlsbDojNTM1MzUyO30KCS5zdDN7ZmlsbDojNUQ1RDVEO30KPC9zdHlsZT4KPC9zdmc+Cg==',
    adapter: () => new SafecoinWalletAdapter({ provider: 'https://wallet.safecoin.org', ...config }),
});
