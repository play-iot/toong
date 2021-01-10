import { Container, HorizontalGroup, InfoBox, LinkButton, VerticalGroup } from '@grafana/ui';
import React, { FC } from 'react';

/**
 * Properties
 */
interface Props {
  /**
   * Data sources
   *
   * @type {any[]}
   */
  datasources?: any[];
}

export const DataSourceList: FC<Props> = ({ datasources }) => {
  /**
   * Check if any data sources was added
   */
  if (datasources?.length === 0) {
    return (
      <div>
        <div className="page-action-bar">
          <div className="page-action-bar__spacer"/>
          <LinkButton href="datasources/new" icon="database">
            Add Toong Data Source
          </LinkButton>
        </div>
        <InfoBox title="Please add Toong Data Sources." url={''}>
          <p>You can add as many data sources as you want to support multiple Toong databases.</p>
        </InfoBox>
      </div>
    );
  }

  /**
   * Return
   */
  return (
    <div>
      <div className="page-action-bar">
        <div className="page-action-bar__spacer"/>
        <LinkButton href="datasources/new" icon="database">
          Add Toong Data Source
        </LinkButton>
      </div>

      <section className="card-section card-list-layout-list">
        <ol className="card-list">
          {datasources?.map((redis, index) => {
            const title = redis.commands?.length ? 'Working as expected' : 'Can\'t retrieve a list of commands';
            // const fill = redis.commands?.length ? '#DC382D' : '#A7A7A7';

            return (
              <li className="card-item-wrapper" key={index} aria-label="check-card">
                <a className="card-item" href={`datasources/edit/${redis.id}`}>
                  <HorizontalGroup justify="space-between">
                    <HorizontalGroup justify="flex-start">
                      <Container margin="xs">
                        {title}
                      </Container>
                      <VerticalGroup>
                        <div className="card-item-name">{redis.name}</div>
                        <div className="card-item-sub-name">{redis.url}</div>
                      </VerticalGroup>
                    </HorizontalGroup>
                  </HorizontalGroup>
                </a>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
};
