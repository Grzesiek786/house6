import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Inject, Injectable, Injector, Type } from '@angular/core';
import { take } from 'rxjs/operators';
import { DialogComponent } from './dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private componentRef: ComponentRef<DialogComponent>;
  private childComponentType: Type<any>

  constructor(private injector: Injector,
              private componentFactoryResolver: ComponentFactoryResolver,
              private applicationRef: ApplicationRef,
              @Inject(DOCUMENT) private document: Document) { }

  public openDialog(childComponentType: Type<any>): ComponentRef<any> {
    this.childComponentType = childComponentType;
    this.componentRef = this.prepareComponentRef();
    this.componentRef.changeDetectorRef.detectChanges();
    this.addDialogToComponentTree();
    this.appendDialogToDOM();
    this.addOnCloseDialogListener();
    return this.prepareChildComponent();
  }

  public closeDialog(): void {
    this.applicationRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }

  public prepareComponentRef(): ComponentRef<DialogComponent> {
    const factory: ComponentFactory<DialogComponent> = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    return factory.create(this.injector);
  }

  public addDialogToComponentTree(): void {
    this.applicationRef.attachView(this.componentRef.hostView);
  }

  public appendDialogToDOM(): void {
    const domElement: HTMLElement = (this.componentRef.hostView as EmbeddedViewRef<DialogComponent>).rootNodes[0] as HTMLElement;
    this.document.body.appendChild(domElement);
  }

  private addOnCloseDialogListener(): void {
    this.componentRef.instance.onClose$
    .pipe(take(1))
    .subscribe(() => this.closeDialog());
  }

  private prepareChildComponent(): ComponentRef<any> {
    const componentFactory: ComponentFactory<Type<any>> = this.componentFactoryResolver.resolveComponentFactory(this.childComponentType);
    this.componentRef.instance.childComponentPlacement.clear();
    return this.componentRef.instance.childComponentPlacement.createComponent(componentFactory);
  }
}
