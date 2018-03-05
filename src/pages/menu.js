import React from 'react'

import { menu } from '../../content/menu.yaml'

import Page from 'components/page'

export default () => (
  <Page title="Menu">
    {menu.map((category, idx) => (
      <table key={idx} className="table menu-table text-left">
        <thead>
          <tr>
            <th className="menu-header">
              <h3 className="menu-title">{category.name}</h3>
            </th>
            {category.sizes.map((size, idx) => (
              <th key={idx} className="text-right">
                <small>{size}</small>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* <!-- Details --> */}
          {category.details.length ? (
            <tr>
              <td className="text-center" colSpan={category.sizes.length + 1}>
                {category.details.map((detail, idx) => <div key={idx}>{detail}</div>)}
              </td>
            </tr>
          ) : null}

          {/* <!-- Toppings --> */}
          {category.toppings.length ? (
            <tr>
              <td className="text-center" colSpan={category.sizes.length + 1}>
                <h5>Toppings</h5>
                <div className="row">
                  {category.toppings.map((topping, idx) => (
                    <div key={idx} className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                      {topping}
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          ) : null}

          {/* <!-- Items --> */}
          {category.items.map((item, idx) => (
            <tr key={idx} itemScope itemType="http://schema.org/Product">
              <td>
                <span itemProp="name">{item.name}</span>
                <small itemProp="description">{item.description}</small>
              </td>
              {item.prices.map((price, idx) => (
                <td key={idx} className="text-right" itemProp="offers" itemScope itemType="http://schema.org/Offer">
                  {price}
                </td>
              ))}
            </tr>
          ))}

          {/* <!-- Extras --> */}
          {category.extras.length ? (
            <tr>
              <td colSpan={category.sizes.length + 1}>Extras</td>
            </tr>
          ) : null}
          {category.extras.map((extra, idx) => (
            <tr key={idx}>
              <td>
                <span>{extra.name}</span>
                <small>{extra.desc}</small>
              </td>
              {extra.prices.map((price, idx) => (
                <td key={idx} className="text-right">
                  {price}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    ))}
  </Page>
)
