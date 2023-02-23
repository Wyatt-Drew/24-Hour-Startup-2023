import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selfie',
  template: `
    <div style="display: flex;">
      <div style="width: 200px; backgroundColor: #93C6E7" >
        <h2 style="text-align: center;">Menu</h2>
        <p (click)="selectTab('Income')" style="display: inline-block; background-color: #58768a; padding: 20px; width: 200px; color: #ffffff; text-align: center;">Income</p>
        <p (click)="selectTab('Needs')" style="display: inline-block; background-color: #58768a; padding: 20px; width: 200px; color: #ffffff; text-align: center;">Needs</p>
        <p (click)="selectTab('Wants')" style="display: inline-block; background-color: #58768a; padding: 20px; width: 200px; color: #ffffff; text-align: center;">Wants</p>
        <p (click)="selectTab('Savings')" style="display: inline-block; background-color: #58768a; padding: 20px; width: 200px; color: #ffffff; text-align: center;">Savings</p>
        <p (click)="selectTab('Investments')" style="display: inline-block; background-color: #58768a; padding: 20px; width: 200px; color: #ffffff; text-align: center;">Investments</p>
      </div>

      <div style="flex: 1; padding: 10px; backgroundColor: #FEDEFF">
        <h2>{{selectedTab}}</h2>
        <!--  -->
        <table *ngIf="selectedTab === 'Income'">
          <!--  -->
          <thead>
            <tr>
            <table id="incomeTable">
  <tbody id="selfie-body">
    <tr>
      <td colspan="2">
        <!-- Income -->
      </td>
    </tr>
    <tr id="income-body"></tr>
    <tr>
      <td colspan="2">
        <button (click)="addRow('income')" id="addRowButton">Add Row</button>
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td id="total-income"></td>
    </tr>
  </tfoot>
</table>
            </tr>
          </thead>
          <tbody id="income-body">
          </tbody>
        </table>
        <table *ngIf="selectedTab === 'Needs'">
          <thead>
            <tr>
            <table id="incomeTable">
  <tbody id="selfie-body">
    <tr>
      <td colspan="2">
        <!-- Needs -->
      </td>
    </tr>
    <tr id="needs-body"></tr>
    <tr>
      <td colspan="2">
        <button (click)="addRow('needs')" id="addRowButton">Add Row</button>
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td id="total-needs"></td>
    </tr>
  </tfoot>
</table>
            
            </tr>
          </thead>
          <tbody id="Needs-body">
          </tbody>
        </table>
        <table *ngIf="selectedTab === 'Savings'">
          <thead>
            <tr>
            
            </tr>
          </thead>
          <tbody id="savings-body">
          </tbody>
        </table>
        <!--  -->
        <table *ngIf="selectedTab === 'Wants'">
          <!--  -->
          <thead>
            <tr>
            <table id="incomeTable">
  <tbody id="total-wants">
    <tr>
      <td colspan="2">
        <!-- Wants -->
      </td>
    </tr>
    <tr id="needs-body"></tr>
    <tr>
      <td colspan="2">
        <button (click)="addRow('needs')" id="addRowButton">Add Row</button>
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td class="total"></td>
    </tr>
  </tfoot>
</table>
            </tr>
          </thead>
          <tbody id="wants-body">
          </tbody>
        </table>
        <table *ngIf="selectedTab === 'Savings'">
          <thead>
            <tr>

            <table id="savingsTable">
  <tbody id="selfie-body">
    <tr>
      <td colspan="2">
        
      </td>
    </tr>
    <tr id="savings-body"></tr>
    <tr>
      <td colspan="2">
        <button (click)="addRow('savings')" id="addRowButton">Add Row</button>
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td id="total-savings"></td>
    </tr>
  </tfoot>
</table>



            </tr>
          </thead>
          <tbody id="savings-body">
          </tbody>
        </table>

        <table *ngIf="selectedTab === 'Investments'">
          <thead>
            <tr>
            <table id="investmentsTable">
  <tbody id="selfie-body">
    <tr>
      <td colspan="2">
      </td>
    </tr>
    <tr id="investments-body"></tr>
    <tr>
      <td colspan="2">
        <button (click)="addRow('investments')" id="addRowButton">Add Row</button>
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td id="total-investments"></td>
    </tr>
  </tfoot>
</table>
            </tr>
          </thead>
          <tbody id="investments-body">
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [
    `
      .selected {
        background-color: yellow;
      }
    `,
  ],
})
export class SelfieComponent implements OnInit {
  salary = 0;
  otherIncome = 0;
  fieldIds: String[] = [];
  selectedTab = 'Income';

  constructor() {}

  ngOnInit(): void {}

  selectTab(tab: string): void {
    this.selectedTab = tab;
    this.setTotal();
  }

  setTotal(): void {
    let total = 0;
    console.log(`Iterating over ${this.fieldIds.length} fields...`)
    for (const fieldId of this.fieldIds) {
      const amountFieldSelector = `amount-${fieldId}`;
      const field = document.getElementById(amountFieldSelector) as HTMLInputElement;
      const fieldValue = Number.parseFloat(field.value) ?? 0;
      if (!isNaN(fieldValue)) {
        total += fieldValue;
      }
    }

    console.log('total', total);
    const totalElement = document.getElementById('total-' + this.selectedTab.toLowerCase());
    for (var i = 0; i < 5; i++)
      totalElement!.innerHTML = `$ ${total.toFixed(2).toLocaleString()}`;
  }

  addRow(section: string): void {
    console.log('Adding in', section);

    // get the tBody
    const tBodyComponent = document.getElementById(`${section}-body`);

    // add a fieldId
    const fieldIdBase = `${this.fieldIds.length + 1}`;
    this.fieldIds.push(fieldIdBase);
    console.log('field ids', this.fieldIds);
    
    // create a row element
    const trow = document.createElement('tr');
    trow.className = 'budget-row';

    const tcol1 = document.createElement('td');
    tcol1.className = 'budget-input-name';
    const nameInputElement = document.createElement('input');
    nameInputElement.type = 'text';
    nameInputElement.id = `name-${fieldIdBase}`;
    
    const nameInputLabel = document.createElement('label');
    nameInputLabel.setAttribute('for', `name-${fieldIdBase}`);
    nameInputLabel.innerHTML = 'Name';    
    tcol1.appendChild(nameInputLabel);
    tcol1.appendChild(nameInputElement);

    const tcol2 = document.createElement('td');
    tcol2.className = 'budget-input-amount'

    const amountInputElement = document.createElement('input');    
    amountInputElement.id = `amount-${fieldIdBase}`;
    amountInputElement.defaultValue = '0';
    amountInputElement.oninput = this.setTotal.bind(this);

    const amountInputLabel = document.createElement('label');
    amountInputLabel.setAttribute('for', `amount-${fieldIdBase}`);
    amountInputLabel.innerHTML = 'Amount';
    
    tcol2.appendChild(amountInputLabel);
    tcol2.appendChild(amountInputElement);

    trow.appendChild(tcol1);
    trow.appendChild(tcol2);

    tBodyComponent?.appendChild(trow);
  }
}
