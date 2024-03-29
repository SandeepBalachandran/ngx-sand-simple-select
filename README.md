<!-- ![](./images/preview.png) -->
<h1 align='center'>ngx-sand-simple-select</h1>

<h3 align="center"> An angular select package</h3>
<br>
<p align="center"> 
  <a href="https://github.com/SandeepBalachandran/ngx-sand-simple-select/releases/" target="_blank">
    <img alt="GitHub release" src="https://img.shields.io/github/v/release/SandeepBalachandran/ngx-sand-simple-select?include_prereleases&style=flat-square">
  </a> 

  <a href="https://github.com/SandeepBalachandran/ngx-sand-simple-select/commits/main" target="_blank">
    <img src="https://img.shields.io/github/last-commit/SandeepBalachandran/ngx-sand-simple-select?style=flat-square" alt="GitHub last commit">
  </a>

  <a href="https://github.com/SandeepBalachandran/ngx-sand-simple-select/issues" target="_blank">
    <img src="https://img.shields.io/github/issues/SandeepBalachandran/ngx-sand-simple-select?style=flat-square&color=red" alt="GitHub issues">
  </a>

  <a href="https://github.com/SandeepBalachandran/ngx-sand-simple-select/pulls" target="_blank">
    <img src="https://img.shields.io/github/issues-pr/SandeepBalachandran/ngx-sand-simple-select?style=flat-square&color=blue" alt="GitHub pull requests">
  </a>

  </br>

  <a href="https://standardjs.com" target="_blank">
    <img alt="ESLint" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square">
  </a>
  
  <a href="" target="_blank">
    <img alt="ESLint" src="https://img.shields.io/github/stars/SandeepBalachandran/ngx-sand-simple-select">
  </a>
  
  <a href="" target="_blank"> 
    <img alt="ESLint" src="https://img.shields.io/github/forks/SandeepBalachandran/ngx-sand-simple-select">
  </a>
   <a href="" target="_blank">
    <img alt="Codesize" src="https://img.shields.io/github/languages/code-size/SandeepBalachandran/ngx-sand-simple-select.svg">
  </a>
  <a href="" target="_blank">
    <img alt="Top Language" src="https://img.shields.io/github/languages/top/SandeepBalachandran/ngx-sand-simple-select.svg">
  </a>
  
</p>
<hr>

## Demo 
![](https://github.com/SandeepBalachandran/ngx-sand-simple-select/raw/main/assets/demo.gif) 

* [Live Demo](https://sandeepbalachandran.github.io/ngx-sand-simple-select/)
* [Playground](https://stackblitz.com/edit/sand-simple-select)
* [NPM package](https://www.npmjs.com/package/ngx-sand-simple-select)

## Table of contents
* [Features](#features)
* [Installation](#getting-started)
* [API](#api)
* [Usage](#usage)

## Features
* Search available.



[Goto Top](#table-of-contents)

## Getting Started
### Step 1 : Install the package 
#### NPM
```cmd
npm install ngx-sand-simpleselect
```
### Step 2 : After installation import SandSimpleSelectModule into your root or feature module

```cmd
import { SandSimpleSelectModule } from 'sand-simple-select'
```
### Step 3 : Add ``` SandSimpleSelectModule``` to the imports of your NgModule

```cmd
@NgModule({
  imports: [
    ...,
    SandSimpleSelectModule
  ],
  ...
})
class YourModule { ... }
```

### Usage  
* Use ```<ngx-sand-simpleselect></ngx-sand-simpleselect> ``` in your templates to add the default dropdown in your view like below

```ts
  <sand-simple-select 
  [dropdowndata]="dropdowndata" 
  [disabledropdwon]="disabled" 
  [selectLabel]="selectLabel"
  [noDataText]="noDataText" 
  (select)="onSelect($event)"  
  (search)="onSearch($event)" 
  (open)="open($event)" 
  (close)="close($event)">
    </sand-simple-select>
 ```
  | Property        | Purpose                                                                                               | Type   | Default value  | Mandatory  |
  | ----------------|------------------------------------------------------------------------------------------------------ |--------|----------------|----------------|
  | dropdowndata      | The array to be passed on the component                                  | array |            |  |
  | disabledropdwon     | disable option for the component                                                                       | |      |  |
  | selectLabel          | Initial label for the select                                                                   |  |             |  |
  | select  | The event once the value is selected from the dropdown                              |  |             |  |
  | search  | The event once start searching on the input field                                                              |  |             |  |
  | open | The event once the dropdown is opened                                                       |  |             |  |
  | close  | The event once the dropdown is closed                                 |  |             |  |

 
 [Goto Top](#table-of-contents)
 
 ## Help Improve

Found a bug or an issue with this? [Open a new issue](https://github.com/SandeepBalachandran/ngx-sand-simple-select/issues) here on GitHub.


## Contribute
Please check the [**Contributing Guidelines**](https://github.com/SandeepBalachandran/ngx-sand-simple-select/blob/main/CONTRIBUTING.md) before contributing.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5. 
