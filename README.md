# toong

Toong App for Grafana that is UI for automation provisioning software to IoT devices

## Development

### Prerequisite

- `node` >= 12
- `yarn`

### How to develop

This is monorepo that is used [yarn workspace](https://classic.yarnpkg.com/en/docs/workspaces/)

```bash
## Install dependencies for all modules
yarn install

## Build
yarn workspaces run build

## Create new Grafana plugin
yarn grafana:create <module_name>
```
