import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {MegaMenuModule} from 'primeng/megamenu';
import { SidenavComponent } from './_components/sidenav/sidenav.component';
import {ToolbarModule} from 'primeng/toolbar';
import { ToolbarComponent } from './_components/toolbar/toolbar.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {SplitterModule} from 'primeng/splitter';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {CaptchaModule} from 'primeng/captcha';
import {ProgressBarModule} from 'primeng/progressbar';
import {ChipModule} from 'primeng/chip';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {SkeletonModule} from 'primeng/skeleton';
import {CardModule} from 'primeng/card';
import {InputMaskModule} from 'primeng/inputmask';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {KnobModule} from 'primeng/knob';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ListboxModule} from 'primeng/listbox';
import {MultiSelectModule} from 'primeng/multiselect';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';
import {TimelineModule} from 'primeng/timeline';
import {PickListModule} from 'primeng/picklist';
import {AccordionModule} from 'primeng/accordion';
import {DividerModule} from 'primeng/divider';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {TooltipModule} from 'primeng/tooltip';
import {PanelMenuModule} from 'primeng/panelmenu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenubarModule} from 'primeng/menubar';
import {ToastModule} from 'primeng/toast';
import {CarouselModule} from 'primeng/carousel';
import {GalleriaModule} from 'primeng/galleria';
import {DragDropModule} from 'primeng/dragdrop';
import {BlockUIModule} from 'primeng/blockui';
import {TabMenuModule} from 'primeng/tabmenu';
import {SliderModule} from 'primeng/slider';
import {TagModule} from 'primeng/tag';
import {SelectButtonModule} from 'primeng/selectbutton';
import {GMapModule} from 'primeng/gmap';
import {ScrollTopModule} from 'primeng/scrolltop';




@NgModule({
  declarations: [SidenavComponent, ToolbarComponent],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    MegaMenuModule,
    ToolbarModule,
    SplitButtonModule,
    MessagesModule,
    MessageModule,
    SplitterModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    CaptchaModule,
    ProgressBarModule,
    ChipModule,
    ProgressSpinnerModule,
    SkeletonModule,
    TagModule,
    CardModule,
    AutoCompleteModule,
    CalendarModule,
    CascadeSelectModule,
    CheckboxModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextareaModule,
    InputTextModule,
    KnobModule,
    KeyFilterModule,
    ListboxModule,
    MultiSelectModule,
    PasswordModule,
    RadioButtonModule,
    RatingModule,
    SliderModule,
    SelectButtonModule,
    ToggleButtonModule,
    TriStateCheckboxModule,
    ButtonModule,
    GMapModule,
    PaginatorModule,
    TableModule,
    TimelineModule,
    PickListModule,
    AccordionModule,
    DividerModule,
    ScrollPanelModule,
    ToolbarModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    DialogModule,
    DynamicDialogModule,
    OverlayPanelModule,
    TooltipModule,
    BreadcrumbModule,
    MenubarModule,
    PanelMenuModule,
    TabMenuModule,
    ToastModule,
    CarouselModule,
    GalleriaModule,
    DragDropModule,
    BlockUIModule,
    ScrollTopModule
  ],
  exports: [
    SidebarModule,
    ButtonModule,
    MegaMenuModule,
    SidenavComponent,
    ToolbarModule,
    ToolbarComponent,
    SplitButtonModule,
    MessagesModule,
    MessageModule,
    SplitterModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    CaptchaModule,
    ProgressBarModule,
    ChipModule,
    ProgressSpinnerModule,
    SkeletonModule,
    TagModule,
    CardModule,
    AutoCompleteModule,
    CalendarModule,
    CascadeSelectModule,
    CheckboxModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextareaModule,
    InputTextModule,
    KnobModule,
    KeyFilterModule,
    ListboxModule,
    MultiSelectModule,
    PasswordModule,
    RadioButtonModule,
    RatingModule,
    SliderModule,
    SelectButtonModule,
    ToggleButtonModule,
    TriStateCheckboxModule,
    ButtonModule,
    GMapModule,
    PaginatorModule,
    TableModule,
    TimelineModule,
    PickListModule,
    AccordionModule,
    DividerModule,
    ScrollPanelModule,
    ToolbarModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    DialogModule,
    DynamicDialogModule,
    OverlayPanelModule,
    TooltipModule,
    BreadcrumbModule,
    MenubarModule,
    PanelMenuModule,
    TabMenuModule,
    ToastModule,
    CarouselModule,
    GalleriaModule,
    DragDropModule,
    BlockUIModule,
    ScrollTopModule
  ]
})
export class SharedModule {
}
